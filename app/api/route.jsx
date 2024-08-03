import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();

//get all todo lists
export async function GET(request){
    const todos = await TodoModel.find({})
    return NextResponse.json({todos:todos})
}

//create or post todo task
export async function POST(request){
    const {title,description} = await request.json();

    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo Created"})
}


//delete tasks
export async function DELETE(request){

    const mongoId = await request.nextUrl.searchParams.get('mongoId')

    await TodoModel.findByIdAndDelete(mongoId)

    return NextResponse.json({msg:"Todo deleted"})
}

//update tasks
export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId')

    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted:true
        }
    });
    return NextResponse.json({msg:"Task Completed"})
}