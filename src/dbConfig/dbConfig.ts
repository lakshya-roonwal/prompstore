import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL as string)
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log("Mongodb Conected Succesfully")
        })
        connection.on('error',(err)=>{
            console.log("Mongodb Conection Error")
            console.log(err)
            process.exit();
        })
        

    }
    catch(error)
    {
        console.log("Something went wrong")
        console.log(error)
    }
}