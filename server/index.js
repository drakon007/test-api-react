import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT //|| 3001
const BD_HOST = process.env.BD_HOST
const BD_PORT = process.env.BD_PORT
const BD_NAME = process.env.BD_NAME

// Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

app.get('/', (req, res) =>{
res.json({massage:'all is fine.'})
}
)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Routes а сами пути были не указаны
// http://localhost:3000
app.use("/auth",authRoute)
app.use("/posts",postRoute)
app.use("/comments",commentRoute)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

async function start() {
    try {
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        //замена способа подключения !!!Не забудь фаил создать .env
        // PORT = 3000
        // BD_HOST = localhost
        // BD_PORT = 27017
        // BD_NAME = myDB (или любое другое название твоей коллекции)
        await mongoose.connect(`mongodb://${BD_HOST}:${BD_PORT}/${BD_NAME}`)
        console.log("connect yes")
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log("connect NO")
        console.log(error)
    }
}
start()