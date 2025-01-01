"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalProdutosService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetTotalProdutosService {
    async execute() {
        // Conta o total de produtos na tabela "produtos"
        const totalProdutos = await prisma_1.default.produto.count();
        return { total: totalProdutos };
    }
}
exports.GetTotalProdutosService = GetTotalProdutosService;
