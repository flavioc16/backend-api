"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalComprasDoDiaController = void 0;
const GetTotalComprasDoDiaService_1 = require("../../../services/admin/compra/GetTotalComprasDoDiaService");
class GetTotalComprasDoDiaController {
    async handle(req, res) {
        try {
            const getTotalComprasDoDiaService = new GetTotalComprasDoDiaService_1.GetTotalComprasDoDiaService();
            const total = await getTotalComprasDoDiaService.execute();
            return res.json({ total });
        }
        catch (error) {
            return res.status(500).json({ error: 'Erro ao obter total das compras do dia.' });
        }
    }
}
exports.GetTotalComprasDoDiaController = GetTotalComprasDoDiaController;
