import express from "express"
import { DataBase } from "./databases.js"
const app = express()
app.use(express.json())

const database = new DataBase()

app.get('/', (req, res) => {
  res.send("Você está na página principal");
})

app.get('/usuario', (req, res) => {
const data = database.select("usuario")
  res.status(200).json(data)
})

app.post('/usuario', (req, res) => {
  const { nome, idade, email } = req.body
  if (nome, idade, email) {
    database.insert("usuario",{ nome, idade, email } )
  return res.status(201).send("Usuário Criado")
}

return res.status(400).send("Informações inválidas")

})

app.listen(3333, () => {
  console.log(`Servidor está rodando na porta https://localhost:3000`);
});
