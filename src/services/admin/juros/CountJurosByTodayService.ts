import prismaClient from "../../../prisma";

class CountJurosByTodayService {
  async execute() {
    // Obtém a data de hoje no formato correto
    const today = new Date().toISOString().split('T')[0];

    // Conta os juros adicionados hoje
    const count = await prismaClient.juros.count({
      where: {
        created_at: {
          gte: new Date(`${today}T00:00:00.000Z`), // Início do dia
          lte: new Date(`${today}T23:59:59.999Z`), // Fim do dia
        },
      },
    });

    return { count };
  }
}

export { CountJurosByTodayService };
