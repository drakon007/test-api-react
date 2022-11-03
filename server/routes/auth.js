import {Router} from 'express'
import {register, login, getMe} from '../controllers/auth.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

// Регистрация
// http://localhost:3000/api/auth/register
router.post('/register', register)

//Логин
// http://localhost:3000/api/auth/login
router.post('/login', login)

// Get me
// http://localhost:3000/api/auth/me
router.get('/me', checkAuth, getMe)

export default router