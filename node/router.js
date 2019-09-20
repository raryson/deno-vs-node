const express = require('express');
const app = express();

app.get('/tdc-recife', (req, res) => {
  res.send('Aqui é uma request feita pelo Node especialmente para o TDC Recife!');
});

app.listen(3000,  () => {
  console.log('Rodando o app na porta 3000');
});