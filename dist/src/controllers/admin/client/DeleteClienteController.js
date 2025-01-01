"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClienteController = void 0;
const DeleteClienteService_1 = require("../../../services/admin/client/DeleteClienteService");
class DeleteClienteController {
    async handle(req, res) {
        const { id } = req.body; // Obtém a ID do corpo da requisição
        if (!id) {
            return res.status(400).json({ error: "ID do cliente não fornecido." });
        }
        const deleteClienteService = new DeleteClienteService_1.DeleteClienteService();
        try {
            const result = await deleteClienteService.execute(id);
            return res.json(result);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.DeleteClienteController = DeleteClienteController;
