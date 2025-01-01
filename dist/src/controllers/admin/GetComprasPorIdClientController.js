"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComprasPorIdController = void 0;
const GetComprasPorIdClientService_1 = require("../../services/admin/GetComprasPorIdClientService");
class GetComprasPorIdController {
    async handle(req, res) {
        const { clienteId } = req.params;
        const getComprasPorIdService = new GetComprasPorIdClientService_1.GetComprasPorIdService();
        try {
            const result = await getComprasPorIdService.execute(clienteId);
            return res.json(result);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetComprasPorIdController = GetComprasPorIdController;
