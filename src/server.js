const express = require('express')

const app = express()

const PORT = 3333

app.get("/message/:id", (request, response) => {
    const {id} = request.params
    response.send(`O id é de: ${id}`)
})

app.get("/user", (request, response) => {
    const {page, limit} = request.query
    response.send(`A página é: ${page}.\n O limite atual é de: ${limit}`)
})

app.listen(PORT, () => {console.log(`Server is running on Port: ${PORT}`)})