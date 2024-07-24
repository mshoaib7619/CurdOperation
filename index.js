const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv')
const dataRoutes = require("./routes/crud");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
dotenv.config();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.get("/", (req, res) =>{
    res.json({
        info :"Node js"
    })
   
})

app.use("/api",dataRoutes)



app.listen(port,host,()=>{
    console.log(`Sever is running at http://${host}:${port}`);

})