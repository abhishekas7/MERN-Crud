import express , { Router }from 'express'

import {addUser,getUser,getUserid} from '../controllers/user_controller.js'

const router = express.Router();

router.post('/add',addUser);
router.get('/all',getUser);
router.get('/:id',getUserid);

export default router;