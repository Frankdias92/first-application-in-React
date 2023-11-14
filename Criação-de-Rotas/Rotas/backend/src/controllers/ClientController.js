const clientes = [
  {'id': 1,'nome': 'Franklin'},
  {'id': 2,'nome': 'Monica'},
  {'id': 3,'nome': 'Jessica'},
];

getClients = (req, res) => {
  res.status(200).send(clientes);
}

getOneClient = (req, res) => {
  let id = req.params.id;
  const client = clientes.find((item) => item.id === Number(id));
  if (client) {
    res.status(200).send(client);
  } else {
    res.status(404).send("Não foi encontrado um cliente com esse ID");
  }
  res.status(200).send(client);
}

createClient = (req, res) => {
  const client = req.body;

  if (Object.keys(client).length > 0) {
    clientes.push(client);
    res.status(201).send(client);
  } else {
    res.status(406).send("Não foi possivel adicionar esse cliente!")
  }

}

updateClient = (req, res) => {
  let id = req.params.id;
  let indice = findClientIndex(id);

  if (indice !== -1) {
    clientes[indice] = req.body;
    res.status(201).send("Cliente Atualizado!");
  } else {
    res.status(406).send("Não foi possivel atualizar o cliente! Verifique e tente novamente.");
  }

}

removeClient = (req, res) => {
  let id = req.params.id;
  let indice = findClientIndex(id);
  clientes.splice(indice, 1);
  res.status(200).send(`O Cliente de ID ${id} foi removido!`);
}



function findClientIndex(id) {
  const indice = clientes.findIndex((item) => item.id === Number(id));
  return indice;
}

module.exports = {getClients, getOneClient, createClient, updateClient, removeClient};