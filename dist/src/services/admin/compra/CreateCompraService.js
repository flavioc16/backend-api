"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompraService = void 0;
const prisma_1 = __importDefault(require("../../../prisma")); // Certifique-se de que este caminho está correto
class CreateCompraService {
    async execute({ descricaoCompra, totalCompra, valorInicialCompra, tipoCompra, statusCompra, clienteId, userId, dataDaCompra, }) {
        // Use a data atual ou a fornecida
        const currentDate = new Date();
        let parsedDate = dataDaCompra ? new Date(dataDaCompra) : currentDate;
        // Certifique-se de que parsedDate tenha o mesmo horário em UTC que a data atual
        parsedDate.setUTCHours(currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds(), currentDate.getUTCMilliseconds());
        // Calcule a data de vencimento (30 dias após a data da compra, por exemplo)
        const vencimentoDate = new Date(parsedDate);
        vencimentoDate.setDate(parsedDate.getDate() + 30); // Adiciona 30 dias
        vencimentoDate.setUTCHours(0, 0, 0, 0);
        // Crie a compra definindo ambos os campos com parsedDate
        const compra = await prisma_1.default.compra.create({
            data: {
                descricaoCompra,
                totalCompra,
                valorInicialCompra,
                tipoCompra,
                statusCompra,
                cliente: { connect: { id: clienteId } },
                user: { connect: { id: userId } },
                dataDaCompra: parsedDate, // Salva como UTC
                created_at: parsedDate, // Salva como UTC
                dataVencimento: vencimentoDate, // Preenche a data de vencimento
            },
        });
        return compra;
    }
}
exports.CreateCompraService = CreateCompraService;
