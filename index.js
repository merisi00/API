const express = require('express');
const app = express();
const port = 3000;

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Simulação do Banco de Dados (Array de Objetos)
let usuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" }
];

// 1. GET Raiz (Mensagem de boas-vindas com contagem dinâmica)
app.get('/', (req, res) => {
    res.send(`Bem vindo a API E-CLASS existem ${usuarios.length} usuários cadastrados!`);
});

// 2. GET todos os usuários
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// 3. GET por nome (Busca via Query Parameter: /usuarios/busca?nome=Alice)
app.get('/usuarios/busca', (req, res) => {
    const { nome } = req.query;
    const filtrados = usuarios.filter(u => u.nome.toLowerCase().includes(nome.toLowerCase()));
    res.json(filtrados);
});

// 4. POST (Criar usuário)
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// 5. PUT (Atualizar por ID)
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

// 6. DELETE (Remover por ID)
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    usuarios = usuarios.filter(u => u.id != id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});