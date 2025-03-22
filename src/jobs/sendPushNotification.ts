import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

// Função para enviar a notificação push via Expo
export async function sendPushNotification(expoPushToken: string, title: string, body: string) {
  try {
    const message = {
      to: expoPushToken, // Token de push do Expo
      sound: 'default',
      title: title, // Título da notificação
      body: body,  // Corpo da notificação
      data: { someData: 'foo' }, // Dados extras que você pode enviar
    };

    const response = await axios.post(
      'https://exp.host/--/api/v2/push/send',
      message
    );

    console.log('Notificação enviada com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar notificação:', error);
  }
}

// Função para enviar uma notificação de compras vencidas
export async function enviarNotificacaoDeComprasVencidas() {
  try {
    // Buscar compras vencidas
    const comprasVencidas = await prisma.compra.findMany({
      where: {
        dataVencimento: {
          lte: new Date(), // Compras com vencimento menor ou igual à data atual
        },
        statusCompra: 0, // Status pendente
      },
    });

    // Agrupar compras vencidas por cliente
    const clientesNotificar = new Map();

    for (const compra of comprasVencidas) {
      const cliente = await prisma.cliente.findUnique({
        where: { id: compra.clienteId },
        include: { user: true }, // Supondo que o usuário tenha um expoPushToken
      });

      if (cliente?.user?.expoPushToken) {
        // Agrupar compras vencidas por cliente
        if (!clientesNotificar.has(cliente.id)) {
          clientesNotificar.set(cliente.id, {
            expoPushToken: cliente.user.expoPushToken,
            compras: []
          });
        }

        // Adiciona a compra vencida à lista de compras do cliente
        clientesNotificar.get(cliente.id)?.compras.push(compra);
      }
    }

    // Enviar notificação para cada cliente
    for (const [clienteId, data] of clientesNotificar) {
      const { expoPushToken, compras } = data;

      // Criar a mensagem para a notificação
      const numeroComprasVencidas = compras.length;
      const titulo = 'Compras Vencidas';
      const corpo = `Você possui ${numeroComprasVencidas} compras vencidas. Por favor, regularize o pagamento.`;

      // Enviar a notificação
      await sendPushNotification(expoPushToken, titulo, corpo);
    }

  } catch (error) {
    console.error('Erro ao enviar notificações de compras vencidas:', error);
  } finally {
    await prisma.$disconnect();
  }
}
