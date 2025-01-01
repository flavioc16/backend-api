"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteController = void 0;
const UpdateClienteService_1 = require("../../../services/admin/client/UpdateClienteService");
class UpdateClienteController {
    async handle(req, res) {
        const { id, nome, endereco, referencia, email, telefone, user } = req.body; // Pega os outros dados do corpo da requisição
        const updateClienteService = new UpdateClienteService_1.UpdateClienteService();
        try {
            // Chama o serviço passando os dados do cliente e do usuário (se houver)
            const cliente = await updateClienteService.execute({
                id,
                nome,
                endereco,
                referencia,
                email,
                telefone,
                user
            });
            return res.json(cliente); // Retorna o cliente atualizado como resposta JSON
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.UpdateClienteController = UpdateClienteController;
