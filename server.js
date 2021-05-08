const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const MY_SECRET = process.env.MY_SECRET

app.get('/', (req, res) => {
  res.send(`Hello World! TEST_KEY = ${MY_SECRET}`)
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
