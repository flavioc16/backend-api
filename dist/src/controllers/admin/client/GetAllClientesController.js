"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClientesController = void 0;
const GetAllClientsService_1 = require("../../../services/admin/client/GetAllClientsService");
class GetAllClientesController {
    async handle(req, res) {
        try {
            const getAllClientesService = new GetAllClientsService_1.GetAllClientesService();
            const clientes = await getAllClientesService.execute();
            return res.json(clientes);
        }
        catch (error) {
            return res.status(500).json({ error: 'Erro ao obter clientes.' });
        }
    }
}
exports.GetAllClientesController = GetAllClientesController;
