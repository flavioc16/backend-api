"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJurosByCompraIdService = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class GetJurosByCompraIdService {
    async execute(id) {
        // Usa findFirst para buscar os juros associados à compra
        const juros = await prisma_1.default.juros.findFirst({
            where: {
                compraId: id, // Usa o campo compraId para buscar os juros
            },
        });
        if (!juros) {
            throw new Error("Juros não encontrados para esta compra.");
        }
        // Retorna o valor dos juros e o total com juros
        return {
            juros: juros.valor // Campo 'valor' na tabela de juros
        };
    }
}
exports.GetJurosByCompraIdService = GetJurosByCompraIdService;
