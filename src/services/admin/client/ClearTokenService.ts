import prismaClient from '../../../prisma';

interface ClearTokenRequest {
    id: string; 
}

class ClearTokenService {
    async execute({ id }: ClearTokenRequest) {
        if (!id) {
            throw new Error('ID do usuário não informado.');
        }

        // Atualizar o expoPushToken para null
        const updatedUser = await prismaClient.user.update({
            where: { id },  // Certificando-se de que o id é utilizado no where
            data: { expoPushToken: null },  // Limpando o token
        });

        return updatedUser;
    }
}

export { ClearTokenService };
