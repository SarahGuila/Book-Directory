const mongoose = require('mongoose')

module.exports.connectToMongo = async() => {
    try { await mongoose.connect('mongodb://localhost/Books')
    console.log('connected to db successfully')
 } catch (error) {
     console.log(error)
     console.log('cannot connect to db')
     throw error}
}