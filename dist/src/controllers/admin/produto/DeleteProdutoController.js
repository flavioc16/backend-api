"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProdutoController = void 0;
const DeleteProdutoService_1 = require("../../../services/admin/produto/DeleteProdutoService"); // Serviço de exclusão do produto
class DeleteProdutoController {
    async handle(req, res) {
        const { id } = req.body; // Pegue o ID do produto a partir dos parâmetros da requisição
        const deleteProdutoService = new DeleteProdutoService_1.DeleteProdutoService();
        try {
            const response = await deleteProdutoService.execute(id);
            return res.json(response);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.DeleteProdutoController = DeleteProdutoController;
