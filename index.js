const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 5001

app.use(morgan("dev"))

app.get('/', (req, res) => { 
    console.log("called")
  res.type(".html")
  res.status(200).end('Hello World Nirmal!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})