import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Você está na página principal");
});
app.post("/", (req, res) => {
  res.send("Você está na página principal via POST");
});

app.listen(3000, () => {
  console.log(`Servidor está rodando na porta https://localhost:3000`);
});
