import prismaClient from "../../../prisma";

class GetClienteApllicatedJurosTodayService {
  async execute() {
    // Obtém a data de hoje no formato correto
    const today = new Date().toISOString().split('T')[0];

    // Busca os clientes com juros aplicados hoje e notificação como false
    const clientsWithJuros = await prismaClient.juros.findMany({
      where: {
        notification: false, // Apenas registros onde notification é false
        created_at: {
          gte: new Date(`${today}T00:00:00.000Z`), // Início do dia
          lte: new Date(`${today}T23:59:59.999Z`), // Fim do dia
        },
      },
      select: {
        clienteId: true,
        cliente: {
          select: {
            nome: true, // Nome do cliente
          },
        },
        created_at: true, // Data de criação
      },
      distinct: ["clienteId"], // Garante que os IDs dos clientes sejam únicos
    });

    // Transforma os dados no formato esperado
    const notifications = clientsWithJuros.map((item) => {
      return {
        id: item.clienteId, // ID do cliente
        title: item.cliente?.nome || "Cliente sem nome", // Nome do cliente
        description: "Juros aplicado(s) em compra(s)", // Descrição fixa
        date: item.created_at.toISOString().split('T')[0], // Data no formato YYYY-MM-DD
        status: 0, // Sempre como não lido (status 0)
        iconType: "bell", // Tipo de ícone
        link: `/clientes/${item.clienteId}`, // Link para a página do cliente
      };
    });

    return notifications; // Retorna os dados no formato esperado
  }
}

export { GetClienteApllicatedJurosTodayService };
