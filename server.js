const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let comentarios = []; // Array para armazenar comentários temporariamente
let proximoId = 1;   // Contador para criar IDs únicos

// Listar comentários
app.get("/api/comentarios", (req, res) => {
  res.json(comentarios);
});

// Adicionar comentário
app.post("/api/comentarios", (req, res) => {
  const { nome, mensagem } = req.body;
  if (!nome || !mensagem) return res.status(400).json({ error: "Dados inválidos" });

  comentarios.push({ id: proximoId++, nome, mensagem });
  res.status(201).json({ message: "Comentário adicionado!" });
});

// Deletar comentário pelo ID
app.delete("/api/comentarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  comentarios = comentarios.filter(c => c.id !== id);
  res.json({ message: "Comentário deletado!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
