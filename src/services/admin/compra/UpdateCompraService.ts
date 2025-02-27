import prismaClient from "../../../prisma"; // Certifique-se de que este caminho está correto

interface CompraRequest {
  id: string;
  descricaoCompra?: string;
  dataDaCompra?: string;
  created_at?: string;
  totalCompra?: number;
  valorInicialCompra?: number;
  tipoCompra?: number;
  statusCompra?: number;
  dataVencimento?: string;
}

class UpdateCompraService {
  async execute({
    id,
    descricaoCompra,
    totalCompra,
    tipoCompra,
    statusCompra,
    valorInicialCompra,
    dataDaCompra,
    dataVencimento, // Esse campo será sobrescrito automaticamente se `dataDaCompra` for alterada
  }: CompraRequest) {
    // Verifica se a compra existe
    const compraExistente = await prismaClient.compra.findUnique({
      where: { id },
    });

    if (!compraExistente) {
      throw new Error("Compra não encontrada");
    }

   
    const currentDate = new Date();
    let novaDataDaCompra = compraExistente.dataDaCompra;

    if (dataDaCompra) {
      
      const dataCompraConvertida = new Date(dataDaCompra);
      novaDataDaCompra = new Date(dataCompraConvertida);
      novaDataDaCompra.setUTCHours(
        currentDate.getUTCHours(),
        currentDate.getUTCMinutes(),
        currentDate.getUTCSeconds(),
        currentDate.getUTCMilliseconds()
      );
    }

    // Calcula nova data de vencimento, se necessário
    let novaDataVencimento: Date | undefined = undefined;

    if (dataDaCompra) {
      novaDataVencimento = new Date(novaDataDaCompra);
      novaDataVencimento.setDate(novaDataVencimento.getDate() + 30);
      novaDataVencimento.setUTCHours(0, 0, 0, 0);
    }

    // Atualiza a compra com os novos dados
    const compraAtualizada = await prismaClient.compra.update({
      where: { id },
      data: {
        descricaoCompra: descricaoCompra ?? compraExistente.descricaoCompra,
        dataDaCompra: novaDataDaCompra,
        totalCompra: totalCompra ?? compraExistente.totalCompra,
        valorInicialCompra: valorInicialCompra ?? compraExistente.valorInicialCompra,
        tipoCompra: tipoCompra ?? compraExistente.tipoCompra,
        statusCompra: statusCompra ?? compraExistente.statusCompra,
        dataVencimento: novaDataVencimento 
          ? novaDataVencimento 
          : compraExistente.dataVencimento,
      },
    });

    return compraAtualizada;
  }
}

export { UpdateCompraService };
