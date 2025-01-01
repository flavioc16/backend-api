"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdutoService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class UpdateProdutoService {
    async execute({ id, nome, descricao, precoAVista, precoAPrazo }) {
        // Verifica se o ID foi fornecido
        if (!id) {
            throw new Error("ID do produto não fornecido.");
        }
        // Verifica se o produto existe no banco de dados
        const produtoExistente = await prisma_1.default.produto.findUnique({
            where: { id: id },
        });
        if (!produtoExistente) {
            throw new Error("Produto não encontrado.");
        }
        // Atualiza o produto com os dados fornecidos
        const produtoAtualizado = await prisma_1.default.produto.update({
            where: { id: id },
            data: {
                nome: nome !== null && nome !== void 0 ? nome : produtoExistente.nome, // Se o nome não for fornecido, mantém o nome atual
                descricao: descricao !== null && descricao !== void 0 ? descricao : produtoExistente.descricao,
                precoAVista: precoAVista !== null && precoAVista !== void 0 ? precoAVista : produtoExistente.precoAVista,
                precoAPrazo: precoAPrazo !== null && precoAPrazo !== void 0 ? precoAPrazo : produtoExistente.precoAPrazo,
            },
        });
        return produtoAtualizado;
    }
}
exports.UpdateProdutoService = UpdateProdutoService;
