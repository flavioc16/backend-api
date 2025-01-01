"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProdutoByIdController = void 0;
const GetProdutoByIdService_1 = require("../../../services/admin/produto/GetProdutoByIdService"); // Serviço de recuperação do produto por ID
class GetProdutoByIdController {
    async handle(req, res) {
        const { id } = req.params; // Pegue o ID do produto a partir dos parâmetros da requisição
        const getProdutoByIdService = new GetProdutoByIdService_1.GetProdutoByIdService();
        try {
            const produto = await getProdutoByIdService.execute(id);
            return res.json(produto);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.GetProdutoByIdController = GetProdutoByIdController;
