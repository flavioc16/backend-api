"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompraService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class UpdateCompraService {
    async execute({ id, descricaoCompra, totalCompra, tipoCompra, statusCompra, valorInicialCompra, dataDaCompra, dataVencimento, // Esse campo será sobrescrito automaticamente se `dataDaCompra` for alterada
     }) {
        // Verifica se a compra existe
        const compraExistente = await prisma_1.default.compra.findUnique({
            where: { id },
        });
        if (!compraExistente) {
            throw new Error("Compra não encontrada");
        }
        // Calcula nova data de vencimento, se necessário
        let novaDataVencimento = undefined;
        if (dataDaCompra) {
            const dataCompraConvertida = new Date(dataDaCompra);
            novaDataVencimento = new Date(dataCompraConvertida);
            novaDataVencimento.setDate(novaDataVencimento.getDate() + 30);
        }
        // Atualiza a compra com os novos dados
        const compraAtualizada = await prisma_1.default.compra.update({
            where: { id },
            data: {
                descricaoCompra: descricaoCompra !== null && descricaoCompra !== void 0 ? descricaoCompra : compraExistente.descricaoCompra,
                dataDaCompra: dataDaCompra
                    ? new Date(dataDaCompra)
                    : compraExistente.dataDaCompra,
                totalCompra: totalCompra !== null && totalCompra !== void 0 ? totalCompra : compraExistente.totalCompra,
                valorInicialCompra: valorInicialCompra !== null && valorInicialCompra !== void 0 ? valorInicialCompra : compraExistente.valorInicialCompra,
                tipoCompra: tipoCompra !== null && tipoCompra !== void 0 ? tipoCompra : compraExistente.tipoCompra,
                statusCompra: statusCompra !== null && statusCompra !== void 0 ? statusCompra : compraExistente.statusCompra,
                dataVencimento: novaDataVencimento
                    ? novaDataVencimento
                    : compraExistente.dataVencimento, // Mantém a existente, se não for alterada
            },
        });
        return compraAtualizada;
    }
}
exports.UpdateCompraService = UpdateCompraService;
