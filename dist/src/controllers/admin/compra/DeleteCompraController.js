"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCompraController = void 0;
const DeleteCompraService_1 = require("../../../services/admin/compra/DeleteCompraService"); // Caminho ajustado
class DeleteCompraController {
    async handle(req, res) {
        const { id } = req.body; // Obtém a ID da compra do corpo da requisição
        if (!id) {
            return res.status(400).json({ error: "ID da compra não fornecido." });
        }
        const deleteCompraService = new DeleteCompraService_1.DeleteCompraService();
        try {
            const result = await deleteCompraService.execute(id);
            return res.json(result); // Retorna a mensagem de sucesso
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.DeleteCompraController = DeleteCompraController;
