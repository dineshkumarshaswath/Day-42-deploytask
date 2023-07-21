import mongoose from 'mongoose'

const studentSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    standard:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }

})

const Students=mongoose.model("students",studentSchema)
export{Students}