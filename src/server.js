import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRouter from "./routes/web"
require("dotenv").config()
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 8080


//config viewEngine
configViewEngine(app)

// config body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// init web routes
initWebRouter(app)

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = "+ PORT)
})