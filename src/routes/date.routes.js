import { Router } from "express";
import {apiRequired} from '../middleware/validateToken.js'
import{getDates, createDates, getDate, updateDate, deleteDate,} from '../controllers/date.controller.js'
import {validateSchema} from '../middleware/validator.middleware.js'
import {createDateSchema} from '../schemas/date.schema.js'

const router = Router()

router.get('/dates', apiRequired, getDates)

router.get('/dates/:id', apiRequired, getDate)

router.post('/dates', apiRequired,validateSchema(createDateSchema), createDates)

router.delete('/dates/:id', apiRequired, updateDate)

router.put('/dates/:id', apiRequired, deleteDate)

export default router

