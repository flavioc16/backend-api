"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProdutoService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class DeleteProdutoService {
    async execute(id) {
        if (!id) {
            throw new Error("ID do produto não fornecido.");
        }
        // Verifica se o produto realmente existe
        const produtoExistente = await prisma_1.default.produto.findUnique({
            where: { id: id },
        });
        if (!produtoExistente) {
            throw new Error("Produto não encontrado.");
        }
        // Exclui o produto
        await prisma_1.default.produto.delete({
            where: { id: id },
        });
        return { message: "Produto excluído com sucesso." };
    }
}
exports.DeleteProdutoService = DeleteProdutoService;
