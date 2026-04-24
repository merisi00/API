const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let usuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" }
];

app.get('/', (req, res) => {
    res.send(`Bem vindo a API E-CLASS existem ${usuarios.length} usuários cadastrados!`);
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/busca', (req, res) => {
    const { nome } = req.query;
    const filtrados = usuarios.filter(u => u.nome.toLowerCase().includes(nome.toLowerCase()));
    res.json(filtrados);
});

app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const index = usuarios.findIndex(u => u.id == id);
    if (index !== -1) {
        usuarios[index].nome = nome;
        return res.json(usuarios[index]);
    }
    res.status(404).send("Usuário não encontrado");
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    usuarios = usuarios.filter(u => u.id != id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
