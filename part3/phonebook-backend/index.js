const express = require("express");
const app = express();

app.use(express.json());

let people = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/people", (request, response) => {
  response.json(people);
});

app.get("/info", (request, response) => {
  const numOfPeople = Number(people.length);
  const date = new Date();
  response.send(
    `Current date: ${date},</br> Number of people in phonebook: ${numOfPeople}`
  );
});

app.get(`/api/people/:id`, (request, response) => {
  const id = Number(request.params.id);
  const person = people.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.send("404 Not found ");
  }
});

app.delete(`/api/people/:id`, (request, response) => {
  const id = Number(request.params.id);
  const person = people.find((people) => people.id, id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(204).end();
  }
});
const generateId = () => {
  const maxId = people.length > 0 ? Math.max(...people.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/people", (request, response) => {
  const body = request.body;

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  people = people.concat(person);

  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
