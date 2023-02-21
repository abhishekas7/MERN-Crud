import express , { Router }from 'express'
import {addUser} from '../controllers/user_controller.js'

const router = express.Router();

router.post('/add',addUser)

export default router;