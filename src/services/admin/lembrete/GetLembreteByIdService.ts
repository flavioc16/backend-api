import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GetLembreteByIdService {
    async execute(lembreteId: string) {
        const lembrete = await prisma.lembrete.findFirst({
            where: {
                id: lembreteId,
            },
        });

        if (!lembrete) {
            throw new Error('Lembrete não encontrado ou você não tem permissão para visualizá-lo.');
        }

        return lembrete;
    }
}

export { GetLembreteByIdService };
