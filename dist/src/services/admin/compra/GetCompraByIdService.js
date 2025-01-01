"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompraByIdService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetCompraByIdService {
    async execute(id) {
        const compra = await prisma_1.default.compra.findUnique({
            where: {
                id: id
            },
            include: {
                juros: true,
                pagamentos: true,
            }
        });
        if (!compra) {
            throw new Error("Compra não encontrada.");
        }
        return compra;
    }
}
exports.GetCompraByIdService = GetCompraByIdService;
