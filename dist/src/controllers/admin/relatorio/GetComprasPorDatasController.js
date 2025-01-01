"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComprasPorDatasController = void 0;
const GetComprasPorDatasService_1 = require("../../../services/admin/relatorio/GetComprasPorDatasService");
class GetComprasPorDatasController {
    async handle(req, res) {
        const { dataInicio, dataFim } = req.query; // Receber as datas como query params
        const service = new GetComprasPorDatasService_1.GetComprasPorDatasService();
        const resultado = await service.execute(dataInicio === null || dataInicio === void 0 ? void 0 : dataInicio.toString(), dataFim === null || dataFim === void 0 ? void 0 : dataFim.toString());
        return res.json(resultado);
    }
}
exports.GetComprasPorDatasController = GetComprasPorDatasController;
