"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProdutoController = void 0;
const CreateProdutoService_1 = require("../../../services/admin/produto/CreateProdutoService"); // Serviço para criação do produto
class CreateProdutoController {
    async handle(req, res) {
        const { nome, descricao, precoAVista, precoAPrazo } = req.body;
        const createProdutoService = new CreateProdutoService_1.CreateProdutoService();
        try {
            const produto = await createProdutoService.execute({
                nome,
                descricao,
                precoAVista,
                precoAPrazo,
            });
            return res.json(produto);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.CreateProdutoController = CreateProdutoController;
