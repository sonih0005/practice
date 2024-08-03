import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/hotel", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongodb server')
})

db.on('error', (err) => {
    console.log('connection error', err)
})

db.on('disconnected', () => {
    console.log('connection disconnected')
})

export default db;