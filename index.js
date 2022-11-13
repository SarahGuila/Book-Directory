const express = require('express')
const {Book} = require('./model')
const { connectToMongo } = require('./dbconfig')
const { appendFile } = require('fs/promises')


const app = express()
app.use(express.json())

app.get('/api/books', async (req, res) => {
    try {
        res.find({bookName})
    }catch (error) {
        res.status(500).send({ error })
    }
})

app.post('/api/newBook', async (req,res) => {
    try {
        const newBook = new Book(req.body)
        const book =  await newBook.Save()
        res.send('Book added successfully')
    }catch (error) {
        res.status(500).send({ message: error })
    }
})

app.listen(8080, _ => console.log('server is up and runing on port 8080'))