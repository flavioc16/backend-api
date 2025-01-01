"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoController = void 0;
const CreatePagamentoService_1 = require("../../../services/admin/pagamento/CreatePagamentoService");
class CreatePagamentoController {
    async handle(req, res) {
        const { valorPagamento, clienteId } = req.body;
        const userId = req.user_id; // Supondo que o user_id vem do middleware de autenticação
        const createPagamentoService = new CreatePagamentoService_1.CreatePagamentoService();
        try {
            const pagamento = await createPagamentoService.execute({ valorPagamento, clienteId, userId });
            return res.json(pagamento);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.CreatePagamentoController = CreatePagamentoController;
