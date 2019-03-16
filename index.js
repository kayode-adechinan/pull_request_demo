const express = require('express')
const app  = express()

// home entry point
app.get('/', (req, res)=> res.send('it hurts'))

app.listen(3000, '0.0.0.0', () => console.log('it works'))
