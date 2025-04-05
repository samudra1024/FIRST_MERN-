import express from "express"
import {PORT ,mongodb} from "./config.js"
import mongoose from "mongoose";
import { BOOK } from "./models/bookmodel.js";
import router from "./routers/Bookroutes.js";
import cors from 'cors'
const app=express();
app.use(express.json());

app.use(cors());

app.use('/',router)

app.get('/',(req,res)=> {
    console.log(req);
    return res.status(234).send("This is sent by 234");
})

mongoose
    .connect(mongodb)
    .then(()=>{
        console.log(`Connection successfull`);
        app.listen(PORT , () => {
            console.log("This is running at port 5500 ");
        });
    })
    .catch((error)=>{
        console.log(error);
    })
