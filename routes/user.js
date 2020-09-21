import express from 'express';
import User from '../controller/user/user.js'
const router = express.Router();
router.post('/login', User.login);
router.get('/signout', User.signout);
export default router
