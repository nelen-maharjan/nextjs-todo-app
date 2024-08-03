import mongoose from "mongoose"

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://nelenmaharjan512:nelen123@cluster0.9pbhebc.mongodb.net/todo-app')
    console.log("DB connected!");
    
}