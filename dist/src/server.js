"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
//functions
const aplicarJuros_1 = require("./jobs/aplicarJuros"); // Importando a função
const autoCommit_1 = require("./jobs/autoCommit");
const criarBackupSQL_1 = require("./jobs/criarBackupSQL");
(0, aplicarJuros_1.aplicarJuros)();
(0, criarBackupSQL_1.criarBackupSQL)();
//commitAutomatico();
// Função de juros
node_cron_1.default.schedule('0 0 * * *', async () => {
    console.log('Executando script de juros...');
    await (0, aplicarJuros_1.aplicarJuros)();
});
// Função de backup SQL
node_cron_1.default.schedule('50 11 * * *', async () => {
    console.log('Executando backup completo...');
    await (0, criarBackupSQL_1.criarBackupSQL)();
});
// Função de commit (agendado para todos os dias, por exemplo)
node_cron_1.default.schedule('55 11 * * *', async () => {
    console.log('Chamando a função de commit');
    await (0, autoCommit_1.commitAutomatico)(); // Chama a função de commit
});
node_cron_1.default.schedule('0 16 * * *', async () => {
    console.log('Executando backup completo...');
    await (0, criarBackupSQL_1.criarBackupSQL)();
});
// Função de commit (agendado para todos os dias, por exemplo)
node_cron_1.default.schedule('5 16 * * *', async () => {
    console.log('Chamando a função de commit');
    await (0, autoCommit_1.commitAutomatico)(); // Chama a função de commit
});
// cron.schedule('* * * * *', async () => {
//   console.log('Executando backup completo...');
//   await criarBackupJSON(); // Chama a função de criar backup
// });
const app = (0, express_1.default)();
app.use(express_1.default.json());
const corsOptions = {
    origin: ['http://192.168.0.128:3000', 'http://localhost:3000'], // Permite as origens do frontend
    methods: 'GET, POST, PUT, DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Authorization' // Cabeçalhos permitidos
};
app.use((0, cors_1.default)(corsOptions));
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
const port = parseInt(process.env.PORT || '3000', 10);
// Altere aqui para 0.0.0.0
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
