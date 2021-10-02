const express = require('express')
const cors = require('cors')
const fetch = require('cross-fetch')
const app = express()
const port = 3001
const options = { method: 'GET' }

app.use(cors())

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get('/flight_api/:date', async (req, res) => {
    const response = await fetch(
      `https://www.hongkongairport.com/flightinfo-rest/rest/flights/past?date=${req.params.date}&lang=en&cargo=false&arrival=false`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        res.json(response)
      })
      .catch((err) => console.error(err))
})