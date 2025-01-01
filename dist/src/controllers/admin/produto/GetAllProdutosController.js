"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProdutosController = void 0;
const GetAllProdutoService_1 = require("../../../services/admin/produto/GetAllProdutoService"); // Serviço de recuperação de todos os produtos
class GetAllProdutosController {
    async handle(req, res) {
        const getAllProdutosService = new GetAllProdutoService_1.GetAllProdutosService();
        try {
            const produtos = await getAllProdutosService.execute();
            return res.json(produtos);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetAllProdutosController = GetAllProdutosController;
