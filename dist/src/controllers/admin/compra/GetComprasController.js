"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllComprasController = void 0;
const GetAllComprasService_1 = require("../../../services/admin/compra/GetAllComprasService");
class GetAllComprasController {
    async handle(req, res) {
        const clienteId = req.cliente_id; // Pega o ID do cliente a partir do middleware de autenticação
        const getAllComprasService = new GetAllComprasService_1.GetAllComprasService();
        try {
            const compras = await getAllComprasService.execute(clienteId);
            return res.json(compras);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetAllComprasController = GetAllComprasController;
