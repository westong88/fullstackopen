const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
var morgan = require('morgan')
app.use(cors())
app.use(express.static('build'))

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramo",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
]

morgan.token("data", (req, res) => {
  const x = req.body;
  return JSON.stringify(x);
})

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${new Date()}</p>`);
})


app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (req, response) => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id)) 
        : 0;
    const person = req.body;
    person.id = maxId + 1;
    const tempP  = persons.find(p => p.name == person.name)
    if(!person.name || ! person.number){
        response.status(400).end('error: name and number needed')
    }
    else if(tempP){
        response.status(400).end('error: name must be unique')
    }else{
        persons = persons.concat(person);
        response.json(persons)
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})