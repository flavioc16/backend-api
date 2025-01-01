"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarBackupJSON = criarBackupJSON;
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma = new client_1.PrismaClient();
async function criarBackupJSON() {
    try {
        console.log('Iniciando backup completo do banco de dados...');
        // Lista de tabelas no banco de dados
        const modelos = ['user', 'cliente', 'compra', 'pagamento', 'juros'];
        // Objeto para armazenar os dados do backup
        const backupData = {
            timestamp: new Date().toISOString(),
            dados: {},
        };
        // Itera sobre os modelos e extrai os dados de cada um
        for (const modelo of modelos) {
            backupData.dados[modelo] = await prisma[modelo].findMany();
        }
        // Define o nome e o caminho do arquivo de backup
        const nomeArquivo = `backup-json-${new Date().toISOString().replace(/:/g, '-')}.json`;
        const caminhoArquivo = path_1.default.join(__dirname, 'backups', nomeArquivo);
        // Cria o diretório de backups se ele não existir
        if (!fs_1.default.existsSync(path_1.default.dirname(caminhoArquivo))) {
            fs_1.default.mkdirSync(path_1.default.dirname(caminhoArquivo), { recursive: true });
        }
        // Salva os dados em um arquivo JSON
        fs_1.default.writeFileSync(caminhoArquivo, JSON.stringify(backupData, null, 2));
    }
    catch (error) {
        console.error('Erro ao criar backup completo:', error);
    }
    finally {
        // Fecha a conexão com o banco de dados
        await prisma.$disconnect();
    }
}
