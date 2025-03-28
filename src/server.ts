import cron from 'node-cron';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { router } from './routes';

// funções
import { aplicarJuros } from './jobs/aplicarJuros';
import { enviarNotificacaoDeComprasVencidas } from './jobs/sendPushNotification'; // Ajuste para a nova função
import { criarBackupJSON } from './jobs/criarBackupJSON';
import { commitAutomatico } from './jobs/autoCommit';
import { criarBackupSQL } from './jobs/criarBackupSQL';

// Chamar funções uma vez para iniciar imediatamente
aplicarJuros();
//enviarNotificacaoDeComprasVencidas();
//criarBackupSQL();
//commitAutomatico();

// Função de juros
cron.schedule('0 0 * * *', async () => {
  console.log('Executando script de juros...');
  await aplicarJuros();
});

// Função para enviar notificações de compras vencidas
cron.schedule('43 10 * * *', async () => {  // Agendado para 7:00 AM todos os dias
  console.log('Enviando notificações de compras vencidas...');
  await enviarNotificacaoDeComprasVencidas(); // Chama a função para enviar notificações
});

// Função de backup SQL
// cron.schedule('50 11 * * *', async () => {
//   console.log('Executando backup completo...');
//   await criarBackupSQL();
// });

// Função de commit (agendado para todos os dias, por exemplo)
// cron.schedule('55 11 * * *', async () => {
//   console.log('Chamando a função de commit');
//   await commitAutomatico(); // Chama a função de commit
// });

// cron.schedule('0 16 * * *', async () => {
//   console.log('Executando backup completo...');
//   await criarBackupSQL();
// });

// Função de commit (agendado para todos os dias, por exemplo)
// cron.schedule('5 16 * * *', async () => {  // Agendado para 3:00 AM todos os dias
//   console.log('Chamando a função de commit');
//   await commitAutomatico(); // Chama a função de commit
// });

// cron.schedule('* * * * *', async () => {
//   console.log('Executando backup completo...');
//   await criarBackupJSON(); // Chama a função de criar backup
// });

const app = express();

app.use(express.json());

const corsOptions = {
  origin: [ // Permite as origens do frontend
    'http://192.168.0.128:3000', 
    'http://localhost:3000', 
    'https://frontend-web-hazel-nine.vercel.app', 
    'http://192.168.0.128:8081',
    'http://localhost:8081'
  ],  
  methods: 'GET, POST, PUT, DELETE',  // Métodos HTTP permitidos
  allowedHeaders: 'Content-Type, Authorization'  // Cabeçalhos permitidos
};

app.use(cors(corsOptions));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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
