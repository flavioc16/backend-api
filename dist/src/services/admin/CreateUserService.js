"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateUserService {
    async execute({ name, username, password }) {
        // Verificando se enviou username
        if (!username) {
            throw new Error("Username incorrect");
        }
        // Verificando se já existe username
        const usernameAlreadyExists = await prisma_1.default.user.findFirst({
            where: {
                username: username
            }
        });
        if (usernameAlreadyExists) {
            throw new Error("Username already exists");
        }
        // Hashing da senha
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Criando o novo usuário
        const user = await prisma_1.default.user.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword
            }, select: {
                id: true,
                name: true,
                username: true,
            }
        });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
