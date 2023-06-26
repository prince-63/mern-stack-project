import express from "express";
import "./database.js"
import routes from "./Routes/routes.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config({path : "./config.env"})

const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/", routes)


app.listen(PORT, () => console.log(`runing port ${PORT}`))
