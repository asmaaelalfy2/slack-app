const express=require('express')
const cors=require('cors')
const { urlencoded } = require('express')

require('dotenv').config()
const app=express()

app.use(cors())
app.use(express.json())
app.use(urlencoded())



app.get('/',(req,res)=>{
    console.log('hello world')
})
app.use('/auth',require('./routes/auth'))

app.listen(8000,()=>console.log('server running'))