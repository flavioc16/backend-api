"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComprasPorIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetComprasPorIdService {
    async execute(clienteId) {
        // Buscar compras com status 0 (não pagas ou restantes), incluindo juros e pagamentos
        const comprasRestantes = await prisma_1.default.compra.findMany({
            where: {
                clienteId: clienteId,
                statusCompra: 0, // Apenas compras com status não pago
            },
            include: {
                cliente: {
                    select: {
                        nome: true,
                    },
                },
                juros: true, // Inclui os dados de juros, caso existam
                pagamentos: true, // Inclui os dados de pagamentos, caso existam
            },
            orderBy: [
                {
                    dataDaCompra: 'asc',
                },
            ],
        });
        // Calcular o valor total das compras restantes
        const somaTotalCompras = comprasRestantes.reduce((acc, compra) => acc + compra.totalCompra, 0);
        return {
            compras: comprasRestantes,
            somaTotalCompras,
        };
    }
}
exports.GetComprasPorIdService = GetComprasPorIdService;
