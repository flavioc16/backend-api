"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProdutoService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class CreateProdutoService {
    async execute({ nome, descricao, precoAVista, precoAPrazo, }) {
        // Criação do produto no banco de dados
        const produto = await prisma_1.default.produto.create({
            data: {
                nome,
                descricao,
                precoAVista,
                precoAPrazo,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });
        return produto;
    }
}
exports.CreateProdutoService = CreateProdutoService;
