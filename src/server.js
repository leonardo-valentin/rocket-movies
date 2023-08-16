const express = require('express')

const app = express()

const PORT = 3333

app.get("/message/:id", (request, response) => {
    const {id} = request.params
    response.send(`O id é de: ${id}`)
})

app.listen(PORT, () => {console.log(`Server is running on Port: ${PORT}`)})