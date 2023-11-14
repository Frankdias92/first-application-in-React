const express = require('express'); // aqui preciso chamar express e preciso chamar minha classe Router para utilizar alguns metodos
const router = express.Router();


// como crio uma rota?

// utilizo minha classe router mais o metodo HTTP que eu estiver criando

// feito isso, cosigo definir no primeiro endpoint e no segundo defino a função que vai ser executada
router.get('/cliente', (req, res) => {
  console.log('Entrei na minha rota /cliente');
  res.status(404).send("Entrei na rota /cliente, e troquei o status");
});

// consigo adicionar outra rota
router.get('/add', (req, res) => {
  console.log('Entrei na minha rota /add');
  res.status(201).send("Entrei na rota de add");
})

module.exports = router;