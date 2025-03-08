import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateLembreteRequest {
    dataCadastro: Date;
    descricao: string;
    userId: string;
}

class CreateLembreteService {
    async execute({ dataCadastro, descricao, userId }: CreateLembreteRequest) {
        const userExists = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            throw new Error('Usuário não encontrado.');
        }

        const now = new Date();
        dataCadastro.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());

        const lembrete = await prisma.lembrete.create({
            data: {
                dataCadastro,
                descricao,
                userId,
            },
        });

        return lembrete;
    }
}

export { CreateLembreteService };
