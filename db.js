import mongoose from "mongoose";

// const DB_NAME = 'hotel';

mongoose.connect(`mongodb+srv://sonih0007:harshitsoni123@cluster0.zkxy5nv.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// const connectDB = async () => {
//     try {
//         const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST ${connnectionInstance.Connection.host}`)
//     } catch (error) {
//         console.log("MongoDB Connection Error", error);
//         process.exit(1);
//     }
// }

// connectDB();

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