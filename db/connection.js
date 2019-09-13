const mongoose = require('mongoose')

let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/book-football-api"
  }
mongoose.connect(mongoURI, { useNewUrlParser: true })
.then((conn) => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
    console.error(err)
})

mongoose.Promise = Promise

module.exports = mongoose