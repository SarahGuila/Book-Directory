const express = require('express')
const {Book} = require('./model')
var mongoose = require('mongoose');
const { connectToMongo } = require('./dbconfig')


connectToMongo()

const app = express()
app.use(express.json())

app.get('/api/books', async (req, res) => {
    try {
        res.send(await Book.find())
    }catch (error) {
        res.status(500).send({ error: "There is no books availble" })
    }
})

app.post('/api/newBook', async (req,res) => {
    try {
        const {bookName,hauther} = (req.body)
        const newBook = new Book({bookName,hauther})
        const exist = await Book.findOne({bookName,hauther})
        if (!exist) {
            await newBook.save()
            res.send({msg:'Book added successfully'})
        }else{
            res.send({msg:'Book Exist'})
        }
   }catch (error) {
        res.status(500).send({ message: "cannot save book" })
    }
})


app.delete('/api/remove/:_id', async (req, res) => {
    try {
        const id = req.params._id
        await Book.findByIdAndDelete(id)
        res.send({msg:'Book with id: ' + id + ' was deleted'}) 
    }catch (error) {
        res.status(500).send({ error})
    }
})

app.listen(8080, _ => console.log('server is up and runing on port 8080'))