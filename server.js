import  express  from "express";
import database from "./database/database"
import cors from "cors"
import dotenv from "dotenv"
import bibleRoutes from "./routes/bibbleRoutes"

dotenv.config()

const app = express();
app.use(express.json())
app.use(cors({origin: "*"}));
app.use("/bible", bibleRoutes)

const port = process.env.PORT||8000;

database()
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
