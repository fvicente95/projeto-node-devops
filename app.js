const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Ola CI/CD - TESTE WORKFLOW');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 3000');
});