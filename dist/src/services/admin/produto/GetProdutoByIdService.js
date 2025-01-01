"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProdutoByIdService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetProdutoByIdService {
    async execute(id) {
        // Recupera o produto por ID
        const produto = await prisma_1.default.produto.findUnique({
            where: {
                id: id,
            },
        });
        if (!produto) {
            throw new Error("Produto não encontrado.");
        }
        return produto;
    }
}
exports.GetProdutoByIdService = GetProdutoByIdService;
