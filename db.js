import mongodb from 'mongodb'
import mongoose from 'mongoose'


 export function dbconnection(){
    const params={
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    }

try {
    mongoose.connect("mongodb+srv://dineshdk:dineshdk@studentcluster.eonipwr.mongodb.net/tsdata",params)
    console.log("db connected successfully ")
    
} catch (error) {
    console.log ( "server err", error)
}
 

  

}