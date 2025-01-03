// Exemplo usando Express.js e Prisma
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Endpoint para contar juros adicionados hoje
app.get('/api/juros/count', async (req, res) => {
  try {
    // Data atual no formato ISO
    const today = new Date().toISOString().split('T')[0];

    // Contar os juros adicionados hoje
    const count = await prisma.juros.count({
      where: {
        created_at: {
          gte: new Date(`${today}T00:00:00.000Z`), // Começo do dia
          lte: new Date(`${today}T23:59:59.999Z`), // Fim do dia
        },
      },
    });

    // Retornar o número de juros encontrados
    res.json({ count });
  } catch (error) {
    console.error('Erro ao contar juros:', error);
    res.status(500).json({ message: 'Erro ao contar juros' });
  }
});
