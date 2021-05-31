require('dotenv').config()
const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

var morgan = require('morgan')
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

/*require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))*/

morgan.token("data", (req, res) => {
  const x = req.body;
  return JSON.stringify(x);
})

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get('/api/persons', (request, response) => {
  Person.find({}).then(p => {
    response.json(p)
  })
  console.log("retrieved")
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${Number(Person.count())} people.</p><p>${new Date()}</p>`);
})


/*app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})*/

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(p => {
    response.json(p)
  })
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  }).catch(error => {
    next(error)
  })
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  }).catch(error => {
    next(error)
  })
})

/*app.post('/api/persons', (req, response) => {
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
})*/

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const newPerson = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, newPerson, {new:true})
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})