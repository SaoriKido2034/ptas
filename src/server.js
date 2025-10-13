import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

const usuarios = [];

app.get("/", (req, res) => {
  res.send("Você está na página principal");
});

app.get("/usuario", (req, res) => {
  res.status(200).json(usuarios);
});

app.post("/usuario", (req, res) => {
  const { nome, idade } = req.body;
  console.log(req.body);
  usuarios.push({ nome, idade });
  console.log(usuarios);

  res.status(201).send("Usuário criado com sucesso");
});

app.listen(3000, () => {
  console.log(`Servidor está rodando na porta https://localhost:3000`);
});
