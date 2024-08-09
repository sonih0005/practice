import 'dotenv/config'
import express, { Router } from "express";
import db from "./db.js";
import { User } from "./models/user.model.js";
import bodyParser from "body-parser";
import userRouter from './routes/user.routes.js'
import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';




const app = express();
const PORT = process.env.PORT || 3000;
// const dbConnection = db;



app.use(bodyParser.json()); //store the data in req.body
app.use('/', userRouter)

// passport middleware
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    console.log('received credentials', username, password)
    const user = await User.findOne({username: username});

    if(!user){
      return done(null, false, {message: 'Incorrect username'})
    }

    const isPasswordMatch = user.password === password ? true : false
    if(isPasswordMatch){
      return done(null, user)
    } else {
      return done(null, false, {message: 'Incorrect password'})
    }
  } catch (error) {
    return done(error)
  }
}))

app.use(passport.initialize())

// app.get('/passport', passport.authenticate('local', {session: false}), (req,res) => {
//   console.log('authentication successfull');
//   res.send('authentication successful')
// })


app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

