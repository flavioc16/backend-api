import prismaClient from "../../../prisma";

class GetClienteApllicatedJurosTodayService {
  async execute() {
    const today = new Date().toISOString().split('T')[0];

    const clientsWithJuros = await prismaClient.juros.findMany({
      where: {
        created_at: {
          gte: new Date(`${today}T00:00:00.000Z`),
          lte: new Date(`${today}T23:59:59.999Z`),
        },
      },
      select: {
        clienteId: true,
        cliente: {
          select: {
            nome: true,
          },
        },
        created_at: true,
        notification: true,
        compra: { // Inclui as compras relacionadas
          select: {
            dataVencimento: true, // Pega a data de vencimento
          },
        },
      },
      distinct: ["clienteId"],
      orderBy: {
        notification: "asc",
      },
    });

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const notifications = clientsWithJuros.map((item) => {
      const dueDate = item.compra?.dataVencimento 
        ? formatDate(item.compra.dataVencimento.toISOString()) // Convertendo para string
        : "Data não disponível.";


      return {
        id: item.clienteId,
        title: item.cliente?.nome || "Cliente sem nome",
        description: "Juros aplicado(s) em compra(s)",
        date: dueDate, // Data de vencimento correta
        status: item.notification ? 1 : 0,
        iconType: "bell",
        link: `/dashboard/purchases/${item.clienteId}`,
      };
    });

    return notifications;
  }
}

export { GetClienteApllicatedJurosTodayService };
