"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClienteService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class DeleteClienteService {
    async execute(clienteId) {
        // Verifica se o cliente realmente existe
        const clienteExistente = await prisma_1.default.cliente.findUnique({
            where: { id: clienteId },
            include: { user: true } // Incluir o user relacionado, caso exista
        });
        if (!clienteExistente) {
            throw new Error("Cliente não encontrado.");
        }
        // Verifica se o cliente possui compras
        const compras = await prisma_1.default.compra.findMany({
            where: { clienteId }
        });
        if (compras.length > 0) {
            throw new Error("Cliente possui compras e não pode ser excluído.");
        }
        // Exclui o cliente primeiro
        await prisma_1.default.cliente.delete({
            where: { id: clienteId }
        });
        // Exclui o usuário associado (se existir) após excluir o cliente
        if (clienteExistente.user) {
            await prisma_1.default.user.delete({
                where: { id: clienteExistente.user.id }
            });
        }
        return { message: "Cliente e usuário excluídos com sucesso." };
    }
}
exports.DeleteClienteService = DeleteClienteService;
