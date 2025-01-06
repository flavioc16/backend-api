import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GetLembretesTodayService {
    async execute(userId: string) {
        const today = new Date();
        
        // Fazendo a data de hoje com hora zerada para comparação com o início do dia
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0); // Hora zerada (00:00:00)

        // Fazendo a data de hoje com hora finalizada para comparar até o fim do dia (23:59:59)
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999); // Hora final (23:59:59)

        // Buscar todos os lembretes que foram cadastrados entre o início e o fim do dia de hoje
        const lembretesHoje = await prisma.lembrete.findMany({
            where: {
                dataCadastro: {
                    gte: startOfDay, // Maior ou igual ao início do dia
                    lte: endOfDay, // Menor ou igual ao final do dia
                },
            },
        });

        return lembretesHoje;
    }
}

export { GetLembretesTodayService };
