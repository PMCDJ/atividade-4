const PORT = 8080
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("./routs/route.js")(app)
app.use(express.static("."))
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

