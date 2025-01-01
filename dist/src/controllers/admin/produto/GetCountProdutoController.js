"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProdutosCountController = void 0;
const GetCountProdutoService_1 = require("../../../services/admin/produto/GetCountProdutoService");
class GetProdutosCountController {
    async handle(req, res) {
        try {
            const getCountProductsService = new GetCountProdutoService_1.GetCountProdutoService();
            const count = await getCountProductsService.execute();
            return res.json({ count }); // Retorna um objeto com a contagem de produtos
        }
        catch (error) {
            return res.status(500).json({ error: 'Erro ao obter a contagem de produtos.' });
        }
    }
}
exports.GetProdutosCountController = GetProdutosCountController;
