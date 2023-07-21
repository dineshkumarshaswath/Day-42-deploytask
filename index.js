import express from 'express'
import { dbconnection } from './db.js'
import { studentRouter } from './Router/studentrouter.js';
import { teacherRouter } from './Router/teacherrouter.js';
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors())

dbconnection();

app.get("/",(req,res)=>{
    return res.send("server condition is fine")
})

app.use("/api",studentRouter)
app.use("/api",teacherRouter)


app.listen(7000,()=>console.log("server listening in localhost:7000"))
