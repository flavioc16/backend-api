"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProdutosService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetAllProdutosService {
    async execute() {
        // Recupera todos os produtos do banco de dados, ordenados pelo nome
        const produtos = await prisma_1.default.produto.findMany({
            orderBy: {
                nome: 'asc', // Ordena os produtos pelo campo 'nome' em ordem ascendente (A-Z)
            },
        });
        return produtos;
    }
}
exports.GetAllProdutosService = GetAllProdutosService;
