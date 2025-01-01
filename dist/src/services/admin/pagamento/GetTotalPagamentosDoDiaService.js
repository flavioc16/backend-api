"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalPagamentosDoDiaService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetTotalPagamentosDoDiaService {
    async execute() {
        // Obtém a data atual
        const hoje = new Date();
        const inicioDoDia = new Date(hoje.setUTCHours(0, 0, 0, 0));
        const fimDoDia = new Date(hoje.setUTCHours(23, 59, 59, 999));
        // Calcula o valor total dos pagamentos do dia
        const totalPagamentos = await prisma_1.default.pagamento.aggregate({
            _sum: {
                valorPagamento: true // Ajuste o nome do campo conforme seu modelo
            },
            where: {
                created_at: {
                    gte: inicioDoDia,
                    lte: fimDoDia
                }
            }
        });
        return totalPagamentos._sum.valorPagamento || 0;
    }
}
exports.GetTotalPagamentosDoDiaService = GetTotalPagamentosDoDiaService;
