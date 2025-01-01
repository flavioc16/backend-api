"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    async execute({ username, password }) {
        // Busca o usuário no banco de dados
        const user = await prisma_1.default.user.findUnique({
            where: {
                username: username
            },
            include: {
                clientes: true // Inclui os clientes relacionados ao usuário
            }
        });
        // Caso o usuário não seja encontrado, lança um erro
        if (!user) {
            throw new Error("Username ou passworld incorretos.");
        }
        // Verifica se a senha fornecida corresponde à senha armazenada no banco
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("passowrd incorrect.");
        }
        // Cria um token JWT com as informações do usuário
        const token = (0, jsonwebtoken_1.sign)({
            name: user.name,
            username: user.username,
            role: user.role
        }, process.env.JWT_SECRET, // Verifique se o JWT_SECRET está configurado no ambiente
        {
            subject: user.id,
            expiresIn: '360d'
        });
        // Retorna as informações do usuário, incluindo o token e os clientes
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role,
            token: token,
            client: user.clientes
        };
    }
}
exports.AuthUserService = AuthUserService;
