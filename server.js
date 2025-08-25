const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const comentarios = []; // Exemplo simples para testes

app.get('/api/comentarios', (req, res) => {
  res.json(comentarios);
});

app.post('/api/comentarios', (req, res) => {
  const { nome, mensagem } = req.body;
  comentarios.push({ nome, mensagem });
  res.status(201).json({ nome, mensagem });
});

// Porta dinâmica para Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
