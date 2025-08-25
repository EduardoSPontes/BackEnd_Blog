const express = require("express");
const cors = require('cors');
app.use(cors({
  origin: 'https://eduardospontes.github.io/Front_End_Blog' 
}));




const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


app.use(cors());
app.use(express.json());

let comentarios = [];

// rota GET (listar comentários)
app.get("/api/comentarios", (req, res) => {
  res.json(comentarios);
});

// rota POST (adicionar comentário)
app.post("/api/comentarios", (req, res) => {
  const { nome, mensagem } = req.body;
  if (!nome || !mensagem) {
    return res.status(400).json({ erro: "Nome e mensagem obrigatórios." });
  }
  const novo = { id: comentarios.length + 1, nome, mensagem };
  comentarios.push(novo);
  res.json(novo);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
