const express = require("express")
const routes  = require("./routes")

const app = express()
app.use(express.json())

app.use(routes)

const PORT = 3333


app.listen(PORT, () => console.log(`O server está rodando na porta: ${PORT}`))