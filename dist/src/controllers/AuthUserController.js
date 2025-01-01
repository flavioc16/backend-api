"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
const AuthUserService_1 = require("../services/AuthUserService");
class AuthUserController {
    async handle(req, res) {
        const { username, password } = req.body;
        try {
            const authUserService = new AuthUserService_1.AuthUserService();
            const user = await authUserService.execute({ username, password });
            return res.json(user);
        }
        catch (error) {
            console.error(error);
            return res.status(401).json({ message: error.message || 'Erro ao autenticar o usuário' });
        }
    }
}
exports.AuthUserController = AuthUserController;
