"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalPagamentosDoDiaController = void 0;
const GetTotalPagamentosDoDiaService_1 = require("../../../services/admin/pagamento/GetTotalPagamentosDoDiaService");
class GetTotalPagamentosDoDiaController {
    async handle(req, res) {
        try {
            const getTotalPagamentosDoDiaService = new GetTotalPagamentosDoDiaService_1.GetTotalPagamentosDoDiaService();
            const total = await getTotalPagamentosDoDiaService.execute();
            return res.json({ total });
        }
        catch (error) {
            return res.status(500).json({ error: 'Erro ao obter total dos pagamentos do dia.' });
        }
    }
}
exports.GetTotalPagamentosDoDiaController = GetTotalPagamentosDoDiaController;
