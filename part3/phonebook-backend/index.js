const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/Person.js')
require('dotenv').config()

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

let people = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}

app.get('/api/people', (request, response) => {
  Person.find({}).then((people) => {
    response.json(people)
  })
})

app.get('/info', (request, response) => {
  const numOfPeople = Number(people.length)
  const date = new Date()
  response.send(
    `Current date: ${date},</br> Number of people in phonebook: ${numOfPeople}`
  )
})

app.get('/api/people/:id', (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person)
  })
})

app.delete('/api/people/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

const generateId = () => {
  const maxId = people.length > 0 ? Math.max(...people.map((n) => n.id)) : 0
  return maxId + 1
}

app.post('/api/people', (request, response, next) => {
  const body = request.body

  if (!body.name || !body.number) {
    response
      .status(400)
      .json({
        error: 'content missing',
      })
      .catch((error) => next(error))
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then((savedPerson) => {
    response.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.put('/api/people/:id', (request, response, next) => {
  const body = request.body

  const updatedPerson = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, updatedPerson, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson)
    })
    .catch((error) => next(error))
})
app.use(errorHandler)
