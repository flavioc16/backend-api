"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompraController = void 0;
const CreateCompraService_1 = require("../../../services/admin/compra/CreateCompraService");
class CreateCompraController {
    async handle(req, res) {
        const { descricaoCompra, totalCompra, tipoCompra, statusCompra, clienteId, dataDaCompra, valorInicialCompra } = req.body;
        const userId = req.user_id; // Pegue o ID do usuário autenticado a partir do middleware de autenticação
        const createCompraService = new CreateCompraService_1.CreateCompraService();
        try {
            const compra = await createCompraService.execute({
                descricaoCompra,
                totalCompra,
                valorInicialCompra,
                tipoCompra,
                statusCompra,
                clienteId,
                userId,
                dataDaCompra, // Passe o campo dataDaCompra
            });
            return res.json(compra);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.CreateCompraController = CreateCompraController;
