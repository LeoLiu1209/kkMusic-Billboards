const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParse.json())
app.use(cors())

app.get('/getHitPlayLists', (req, res)=>{
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.PORT||8081)
