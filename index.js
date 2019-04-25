const express = require('express')
const app = express()
const port = 3000;
const readRoute = require('./routes/read')

app.use(readRoute);

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})