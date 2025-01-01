"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs")); // Certifique-se de ter o bcrypt instalado
class UpdateClienteService {
    async execute({ id, nome, endereco, referencia, email, telefone, user }) {
        // Verifica se o cliente existe
        const clienteExistente = await prisma_1.default.cliente.findUnique({
            where: { id },
            include: {
                user: true, // Inclui o usuário vinculado ao cliente
            },
        });
        if (!clienteExistente) {
            throw new Error("Cliente não encontrado");
        }
        // Atualiza o cliente com os novos dados
        const clienteAtualizado = await prisma_1.default.cliente.update({
            where: { id },
            data: {
                nome: nome || clienteExistente.nome,
                endereco: endereco || clienteExistente.endereco,
                referencia: referencia || clienteExistente.referencia,
                email: email || clienteExistente.email,
                telefone: telefone || clienteExistente.telefone,
            },
        });
        // Atualiza os dados do usuário associado, se houver
        if (user) {
            const updatedUserData = {
                username: user.username || clienteExistente.user.username, // Agora pega o username do user
            };
            // Se a senha foi fornecida, faça o hash
            if (user.password) {
                const hashedPassword = await bcryptjs_1.default.hash(user.password, 10);
                updatedUserData.password = hashedPassword;
            }
            await prisma_1.default.user.update({
                where: { id: clienteExistente.userId },
                data: updatedUserData,
            });
        }
        // Retorna o cliente atualizado junto com os dados do usuário
        const clienteComUsuarioAtualizado = await prisma_1.default.cliente.findUnique({
            where: { id },
            include: { user: true },
        });
        return clienteComUsuarioAtualizado;
    }
}
exports.UpdateClienteService = UpdateClienteService;
