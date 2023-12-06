const express = require("express")

const app = express()
app.use(express.json())

const PORT = 3333

app.post("/users", (request, response) => {
  const { name, email, password } = request.body

  response.json({ name, email, password })
})

app.listen(PORT, () => console.log(`O server está rodando na porta: ${PORT}`))