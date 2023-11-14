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

module.exports = {getClients, getOneClient};