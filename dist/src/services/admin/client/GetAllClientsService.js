"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClientesService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetAllClientesService {
    async execute() {
        // Obtém todos os clientes
        const clientes = await prisma_1.default.cliente.findMany({
            include: {
                user: true
            },
            orderBy: {
                nome: 'asc' // Ordena pelo campo 'nome' de forma crescente
            }
        });
        // Remove a propriedade `role` de cada objeto `user`
        const clientesSemRole = clientes.map(cliente => {
            const { role, ...userWithoutRole } = cliente.user;
            return {
                ...cliente,
                user: userWithoutRole
            };
        });
        return clientesSemRole;
    }
}
exports.GetAllClientesService = GetAllClientesService;
