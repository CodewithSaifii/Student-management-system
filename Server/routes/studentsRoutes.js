import express from 'express'


import {createStudent,getallStudent,getStudentid,updateStudent,deleteStudent} from '../controllers/studentController.js'
const router = express.Router()

router.post("/",createStudent);
router.get("/",getallStudent);
router.get("/:id",getStudentid);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

export default router