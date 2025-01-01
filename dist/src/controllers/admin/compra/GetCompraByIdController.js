"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompraByIdController = void 0;
const GetCompraByIdService_1 = require("../../../services/admin/compra/GetCompraByIdService");
class GetCompraByIdController {
    async handle(req, res) {
        const { compraId } = req.params;
        const getCompraByIdService = new GetCompraByIdService_1.GetCompraByIdService();
        try {
            const compra = await getCompraByIdService.execute(compraId);
            return res.json(compra);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetCompraByIdController = GetCompraByIdController;
