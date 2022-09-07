import  express from "express";
import { v4 } from "uuid";

const app = express();

app.use(express.json())

const custumers = [];

app.post("/account", (req,res)=>{
  const { cpf, name } = req.body;
  console.log(cpf,name);
  const id = v4();

  custumers.push({
    cpf,
    name,
    id,
    statment: []
  })

  return res.status(201).send();
})

app.listen(3333)