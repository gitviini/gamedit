import express from "express"
import morgan from "morgan"

// * Aplication instance
const app = express()
const PORT = 3000

// * Middlewares
app.use(morgan("tiny"))

// * Routes
app.route("/")
    .get((req, res)=>{
        res.send("Test")
    })

app.listen(PORT, ()=>{
    console.log("\x1b[3mApp runing in: \x1b[4;35mhttp://localhost:"+PORT+"\x1b[m")
})