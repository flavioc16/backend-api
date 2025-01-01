"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteController = void 0;
const CreateClienteService_1 = require("../../../services/admin/client/CreateClienteService ");
class CreateClienteController {
    async handle(req, res) {
        const { nome, endereco, referencia, email, telefone, username, password } = req.body;
        const createClienteService = new CreateClienteService_1.CreateClienteService();
        try {
            const { cliente } = await createClienteService.execute({
                nome,
                endereco,
                referencia,
                email,
                telefone,
                username,
                password
            });
            return res.json({ cliente });
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
exports.CreateClienteController = CreateClienteController;
