const express = require('express')
const cors = require('cors')
const scores = require('./playData/scores.json')

// Constants
const PORT = 1143

// App
const app = express();

// Cross-Origin Requests
app.use(cors())

app.get('/', (req, res) => {
  res.send(scores)
})

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`))