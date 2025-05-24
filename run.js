import express from "express"
import {getPath} from "./utils.js"
import morgan from "morgan"
import nunjucks from "nunjucks"
import favicon from "serve-favicon"
import bodyParser from "body-parser"

// * Aplication instance
const app = express()
const PORT = 3000

// * Aplication configures

app.set("view engine", "njk")
nunjucks.configure(getPath("/templates/"), { autoescape: true, express: app, watch: true })
app.use(express.static(getPath("/static/")))
app.use(bodyParser.json())

// * Middlewares
app.use(morgan("tiny"))

// * Routes
app.route("/")
    .get((req, res)=>{
        res.render("home/index.html")
    })

app.listen(PORT, ()=>{
    console.log("\x1b[3mApp runing in: \x1b[4;35mhttp://localhost:"+PORT+"\x1b[m")
})