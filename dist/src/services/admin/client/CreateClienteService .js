"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateClienteService {
    async execute({ nome, endereco, referencia, email, telefone, username, password }) {
        if (!username) {
            throw new Error("Username is required");
        }
        const usernameAlreadyExists = await prisma_1.default.user.findFirst({
            where: {
                username: username
            }
        });
        if (usernameAlreadyExists) {
            throw new Error("Username already exists");
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await prisma_1.default.user.create({
            data: {
                name: nome,
                username: username,
                password: hashedPassword,
                role: "USER"
            }, select: {
                id: true,
                name: true,
                username: true,
                role: true
            }
        });
        const cliente = await prisma_1.default.cliente.create({
            data: {
                nome: nome,
                endereco: endereco,
                referencia: referencia,
                email: email,
                telefone: telefone,
                userId: user.id
            }, select: {
                id: true,
                nome: true,
                endereco: true,
                referencia: true,
                email: true,
                telefone: true
            }
        });
        return { cliente };
    }
}
exports.CreateClienteService = CreateClienteService;
