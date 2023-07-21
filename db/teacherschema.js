
import mongoose from 'mongoose'


const teacherschema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
})

 export const Teachers= mongoose.model("teachers",teacherschema)

  
