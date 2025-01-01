"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalProdutosController = void 0;
const GetTotalProdutosService_1 = require("../../../services/admin/produto/GetTotalProdutosService"); // Serviço de contagem de produtos
class GetTotalProdutosController {
    async handle(req, res) {
        const getTotalProdutosService = new GetTotalProdutosService_1.GetTotalProdutosService();
        try {
            const totalProdutos = await getTotalProdutosService.execute();
            return res.json(totalProdutos);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetTotalProdutosController = GetTotalProdutosController;
