import { Router } from "express";
// import userFilter from "../userFilter";
import {data, deleteUser, home, menu, menuDetails, registerUser, savedToDb, updateDetails, userDetails, userFilter} from "../userFilter.js";
import passport from "passport";


const router =Router();

router.route('/home').post(passport.authenticate('local', {session: false
}),home);
router.route('/registerUser').post(registerUser)
router.route('/user/:workType').get(userFilter);
router.route('/register').get(savedToDb);
router.route('/menu').post(menu);
router.route('/data').get(data);
router.route('/userDetails').get(userDetails)
router.route('/menuDetails').get(menuDetails);
router.route('/user/:id').patch(updateDetails)
router.route('/user/:userId').delete(deleteUser)

export default router;