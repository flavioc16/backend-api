"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailUserService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DetailUserService {
    async execute(user_id, role) {
        let user;
        if (role === 'ADMIN') {
            user = await prisma_1.default.user.findFirst({
                where: {
                    id: user_id
                }, select: {
                    id: true,
                    username: true,
                    role: true
                }
            });
        }
        else if (role === 'USER') {
            user = await prisma_1.default.cliente.findFirst({
                where: {
                    id: user_id
                }
            });
        }
        else {
            throw new Error("Invalid role");
        }
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}
exports.DetailUserService = DetailUserService;
