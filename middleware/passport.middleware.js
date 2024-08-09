// import { RegisterUser } from "../models/resgisterUser.model.js";

import { User } from "../models/user.model.js";

const authentication = async (username, password, done) => {
    try {
        console.log('Received credentials: ', username, password);
        const user = await User.findOne({username: username})
        console.log(user)

        if(!user) {
            return done(null, false, {message: 'incorrect username'})
        }

        const isPasswordMatch = user.password === password ? true : false
        if(isPasswordMatch){
            return done(null, user)
        }else{
            return done(null, false, {message: 'incorrect password'})
        }
    } catch (error) {
        console.log(error)
        return done(error)
    }
}
export default authentication;