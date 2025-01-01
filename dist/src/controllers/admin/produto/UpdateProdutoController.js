"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdutoController = void 0;
const UpdateProdutoService_1 = require("../../../services/admin/produto/UpdateProdutoService"); // Serviço de atualização de produto
class UpdateProdutoController {
    async handle(req, res) {
        const { nome, descricao, precoAVista, precoAPrazo, id } = req.body; // Pegue os dados que vão ser atualizados
        const updateProdutoService = new UpdateProdutoService_1.UpdateProdutoService();
        try {
            const produtoAtualizado = await updateProdutoService.execute({
                id,
                nome,
                descricao,
                precoAVista,
                precoAPrazo,
            });
            return res.json(produtoAtualizado);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.UpdateProdutoController = UpdateProdutoController;
