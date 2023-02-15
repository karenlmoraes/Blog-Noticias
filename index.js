const express = require('express')
// import express from 'express'

const app = express()

require('dotenv').config()

// const postsRouter = require('./routes/post.routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use("/api/v1/posts", postsRouter)
// //app.use("/api/v1/games", postsRouter)

app.get("/",(req,res)=>{res.send("ola")})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Servidor na porta 3000 rodando...")
})
