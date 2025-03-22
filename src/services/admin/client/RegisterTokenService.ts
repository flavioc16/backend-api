import prismaClient from '../../../prisma';

interface RegisterTokenRequest {
    userId: string; // Alterado para userId
    expoPushToken: string;
}

class RegisterTokenService {
    async execute({ userId, expoPushToken }: RegisterTokenRequest) {
        if (!expoPushToken) {
            throw new Error('Token não informado.');
        }

        // Verificar se o usuário existe
        const user = await prismaClient.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        // Atualizar o token no usuário
        const updatedUser = await prismaClient.user.update({
            where: { id: userId },
            data: { expoPushToken },
        });

        return updatedUser;
    }
}

export { RegisterTokenService };
