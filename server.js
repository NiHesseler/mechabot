const jsonServer = require('json-server')
const path = require('path')
const express = require('express')
const app = express()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use('/api', router)

// Serve o build do React
app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
