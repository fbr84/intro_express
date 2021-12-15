const express = require('express')
const app = express()

app.get('/', (req, res) => {
  // res.send('<h1>INICIO</h1>')
  res.sendFile('./views/index.html', {root:__dirname})
})

app.get('/about', (req, res) => {
  // res.send('<h1>Sobre Nosotros</h1>')
  res.sendFile('./views/about.html', {root:__dirname})
})

app.get('/about-us',(req,res) => {
  res.redirect('/about')
})

app.use((req, res) => {
  res.sendFile('./views/404.html', {root:__dirname})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})