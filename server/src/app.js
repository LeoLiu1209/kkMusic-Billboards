const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const kkFetcher = require('../routes/kkFetcher')

const app = express()
app.use(bodyParse.json())
app.use(cors())

app.use('/getHitPlayLists',kkFetcher)

app.listen(process.env.PORT||8081)
