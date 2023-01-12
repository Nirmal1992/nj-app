const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { 
  res.type(".html")
  res.status(200).end('Hello World Nirmal!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})