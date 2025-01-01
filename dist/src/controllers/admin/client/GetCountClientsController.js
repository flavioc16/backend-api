"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientesCountController = void 0;
const GetCountClientsService_1 = require("../../../services/admin/client/GetCountClientsService");
class GetClientesCountController {
    async handle(req, res) {
        try {
            const getClientesCountService = new GetCountClientsService_1.GetCountClientsService();
            const count = await getClientesCountService.execute();
            return res.json({ count }); // Retorna um objeto com a contagem de clientes
        }
        catch (error) {
            return res.status(500).json({ error: 'Erro ao obter a contagem de clientes.' });
        }
    }
}
exports.GetClientesCountController = GetClientesCountController;
