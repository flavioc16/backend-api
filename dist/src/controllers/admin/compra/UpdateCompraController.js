"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompraController = void 0;
const UpdateCompraService_1 = require("../../../services/admin/compra/UpdateCompraService");
class UpdateCompraController {
    async handle(req, res) {
        const { id, descricaoCompra, totalCompra, tipoCompra, statusCompra, created_at, dataDaCompra, } = req.body;
        const updateCompraService = new UpdateCompraService_1.UpdateCompraService();
        try {
            const compraAtualizada = await updateCompraService.execute({
                id, // Passa o `id` vindo do corpo
                descricaoCompra,
                totalCompra,
                tipoCompra,
                statusCompra,
                created_at,
                dataDaCompra,
            });
            return res.json(compraAtualizada);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.UpdateCompraController = UpdateCompraController;
