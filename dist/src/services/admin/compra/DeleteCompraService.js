"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCompraService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class DeleteCompraService {
    async execute(id) {
        if (!id) {
            throw new Error("ID da compra não fornecido.");
        }
        // Verifica se a compra existe
        const compraExistente = await prisma_1.default.compra.findUnique({
            where: { id: id },
        });
        if (!compraExistente) {
            throw new Error("Compra não encontrada.");
        }
        // Verifica se há juros associados a essa compra
        const jurosAssociados = await prisma_1.default.juros.findFirst({
            where: { compraId: id },
        });
        if (jurosAssociados) {
            throw new Error("A compra possue juros e não pode ser excluída.");
        }
        // Exclui a compra
        await prisma_1.default.compra.delete({
            where: { id: id },
        });
        return { message: "Compra excluída com sucesso." };
    }
}
exports.DeleteCompraService = DeleteCompraService;
