"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClienteByIdService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetClienteByIdService {
    async execute(clienteId) {
        const cliente = await prisma_1.default.cliente.findUnique({
            where: {
                id: clienteId,
            }
        });
        if (!cliente) {
            throw new Error("Cliente não encontrado");
        }
        return cliente;
    }
}
exports.GetClienteByIdService = GetClienteByIdService;
