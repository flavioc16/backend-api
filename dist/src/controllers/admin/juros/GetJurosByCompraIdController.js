"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJurosByCompraIdController = void 0;
const GetJurosByCompraIdService_1 = require("../../../services/admin/juros/GetJurosByCompraIdService");
class GetJurosByCompraIdController {
    async handle(req, res) {
        const { compraId } = req.body; // Pega o ID da compra da URL
        if (!compraId) {
            return res.status(400).json({ error: "O parâmetro 'compraId' é obrigatório." });
        }
        const getJurosByCompraIdService = new GetJurosByCompraIdService_1.GetJurosByCompraIdService();
        try {
            const result = await getJurosByCompraIdService.execute(compraId);
            return res.json(result);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetJurosByCompraIdController = GetJurosByCompraIdController;
