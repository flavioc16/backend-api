import prismaClient from "../../../prisma";

class GetClienteByIdService {
    async execute(clienteId: string) {
        const cliente = await prismaClient.cliente.findUnique({
            where: {
                id: clienteId,
            },
            include: {
                user: true, // Inclui os dados do usuário associado
            },
        });

        if (!cliente) {
            throw new Error("Cliente não encontrado");
        }

        return cliente;
    }
}

export { GetClienteByIdService };
