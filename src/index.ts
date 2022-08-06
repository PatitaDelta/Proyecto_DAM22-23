import express from 'express'

const app = express()
app.use(express.json()) // formatea el request body a un json

const PORT = 3000

app.get('/', (_req, res) => {
  console.log('Ha entrado en /')
  res.send('Hola Mundo')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
