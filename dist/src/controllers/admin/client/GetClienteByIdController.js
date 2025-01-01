"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClienteByIdController = void 0;
const GetClienteByIdService_1 = require("../../../services/admin/client/GetClienteByIdService");
class GetClienteByIdController {
    async handle(req, res) {
        const { clienteId } = req.params;
        // Verifique se o clienteId é válido
        if (!clienteId || typeof clienteId !== 'string') {
            return res.status(400).json({ error: 'Cliente ID inválido' });
        }
        const getClienteByIdService = new GetClienteByIdService_1.GetClienteByIdService();
        try {
            const cliente = await getClienteByIdService.execute(clienteId);
            return res.json(cliente);
        }
        catch (error) {
            console.error('Erro ao buscar cliente:', error.message);
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetClienteByIdController = GetClienteByIdController;
