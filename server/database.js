import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({ path: "./config.env" })

const DATABASE = process.env.DATABASE

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("successFull!"))
    .catch((err) => console.log(err));
