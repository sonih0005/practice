import express, { Router } from "express";
import db from "./db.js";
import { User } from "./models/user.model.js";
import { Menu } from "./models/menu.model.js";
import bodyParser from "body-parser";
import userRouter from './routes/user.routes.js'

const app = express();
const PORT = 8080;
const dbConnection = db;


app.use(bodyParser.json()); //store the data in req.body
app.use('/', userRouter)

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

