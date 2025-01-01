"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComprasPorDatasService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetComprasPorDatasService {
    async execute(dataInicio, dataFim) {
        const filtros = {};
        // Função para garantir o início do dia em UTC (00:00:00)
        const resetToStartOfDayUTC = (date) => {
            const newDate = new Date(date);
            newDate.setUTCHours(0, 0, 0, 0); // Zera a hora para o início do dia
            return newDate;
        };
        // Função para garantir o final do dia em UTC (23:59:59.999)
        const resetToEndOfDayUTC = (date) => {
            const newDate = new Date(date);
            newDate.setUTCHours(23, 59, 59, 999); // Define para o final do dia
            return newDate;
        };
        // Adicionar condições de intervalo de datas, se fornecidas
        if (dataInicio) {
            filtros.dataDaCompra = {
                ...(filtros.dataDaCompra || {}),
                gte: resetToStartOfDayUTC(dataInicio), // Data maior ou igual à data de início
            };
        }
        if (dataFim) {
            filtros.dataDaCompra = {
                ...(filtros.dataDaCompra || {}),
                lte: resetToEndOfDayUTC(dataFim), // Data menor ou igual à data de fim
            };
        }
        const compras = await prisma_1.default.compra.findMany({
            where: filtros,
            include: {
                cliente: {
                    select: {
                        nome: true,
                        id: true
                    },
                },
                juros: true,
                pagamentos: true,
            },
            orderBy: [
                {
                    dataDaCompra: 'asc',
                },
            ],
        });
        const somaTotalCompras = compras.reduce((acc, compra) => acc + compra.totalCompra, 0);
        return {
            compras,
            somaTotalCompras,
        };
    }
}
exports.GetComprasPorDatasService = GetComprasPorDatasService;
