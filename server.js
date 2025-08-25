const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let comentarios = []; // Array para armazenar comentários temporariamente

app.get("/api/comentarios", (req, res) => {
  res.json(comentarios);
});

app.post("/api/comentarios", (req, res) => {
  const { nome, mensagem } = req.body;
  if (!nome || !mensagem) return res.status(400).json({ error: "Dados inválidos" });

  comentarios.push({ nome, mensagem });
  res.status(201).json({ message: "Comentário adicionado!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
