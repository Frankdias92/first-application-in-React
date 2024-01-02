const clientes = [
  {
    id: 1,
    nome: 'user1',
    email: 'teste@example.com',
    telefone: '12 12 21 21'
  },

  {
    id: 2,
    nome: 'user2',
    email: 'teste@example.com',
    telefone: '12 12 21 21'
  },

  { id: 3,
    nome: 'user3',
    email: 'teste@example.com',
    telefone: '12 122121'
  }
]

getClients = (req, res) => {
  res.status(200).send(clientes)
}

getOneClient = (req, res) => {
  let id = req.params.id
  const client = clientes.find(item => item.id === Number(id))
  if (client) {
    res.status(200).send(client)
  } else {
    res.status(404).send('Não foi encontrado um cliente com esse ID')
  }
  res.status(200).send(client)
}

let nextClientId = clientes.length + 1; // evitando uma id repetida
createClient = (req, res) => {
  const client = req.body

  if (Object.keys(client).length > 0) {
    client.id = nextClientId++;
    clientes.push(client)
    res.status(201).send(client)
  } else {
    res.status(406).send('Não foi possivel adicionar esse cliente!')
  }
}

updateClient = (req, res) => {
  let id = req.params.id
  let indice = findClientIndex(id)

  if (indice !== -1) {
    clientes[indice] = {id: Number(id), ...req.body}
    res.status(201).send('Cliente Atualizado!')
  } else {
    res
      .status(406)
      .send(
        'Não foi possivel atualizar o cliente! Verifique e tente novamente.'
      )
  }
}

removeClient = (req, res) => {
  let id = req.params.id
  let indice = findClientIndex(id)
  clientes.splice(indice, 1)
  res.status(200).send(`O Cliente de ID ${id} foi removido!`)
}

function findClientIndex(id) {
  const indice = clientes.findIndex(item => item.id === Number(id))
  return indice
}

module.exports = {
  getClients,
  getOneClient,
  createClient,
  updateClient,
  removeClient
}
