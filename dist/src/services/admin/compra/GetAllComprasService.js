"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllComprasService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetAllComprasService {
    async execute(clienteId) {
        // Busca as compras não pagas do cliente
        const compras = await prisma_1.default.compra.findMany({
            where: {
                clienteId: clienteId,
                tipoCompra: 0, // 0 representa compras não pagas
                statusCompra: 0 // 0 representa status não pago
            },
            select: {
                id: true,
                descricaoCompra: true,
                totalCompra: true,
                valorInicialCompra: true,
                tipoCompra: true,
                statusCompra: true,
                created_at: true,
                updated_at: true,
                dataDaCompra: true,
                dataVencimento: true,
            }
        });
        // Calcula o total das compras não pagas
        const somaTotalCompras = await prisma_1.default.compra.aggregate({
            _sum: {
                totalCompra: true
            },
            where: {
                clienteId: clienteId,
                tipoCompra: 0, // 0 representa compras não pagas
                statusCompra: 0 // 0 representa status não pago
            }
        });
        return {
            compras,
            somaTotalCompras: somaTotalCompras._sum.totalCompra || 0
        };
    }
}
exports.GetAllComprasService = GetAllComprasService;
