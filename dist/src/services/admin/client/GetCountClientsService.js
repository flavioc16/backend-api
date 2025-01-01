"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCountClientsService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetCountClientsService {
    async execute() {
        // Contando o número de registros na tabela "cliente"
        const count = await prisma_1.default.cliente.count();
        return count;
    }
}
exports.GetCountClientsService = GetCountClientsService;
