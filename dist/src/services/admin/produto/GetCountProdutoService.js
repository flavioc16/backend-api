"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCountProdutoService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetCountProdutoService {
    async execute() {
        // Contando o número de registros na tabela "produto"
        const count = await prisma_1.default.produto.count();
        return count;
    }
}
exports.GetCountProdutoService = GetCountProdutoService;
