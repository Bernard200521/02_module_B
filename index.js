const express=require("express");
const cors=require("cors");
const app=express();
const bcrypt=require("bcryptjs");
// app.use(express.json());
// app.use(cors);

let students=[]

app.get("/students", (req,res)=>{
    res.json({students});
});

app.post("/students",(req,res)=>{
    const {name,email} = req.body;
    if(!name || !email )
    { 
        res.status(400).json({"message":"All fields are required"});
    }
    const newStudent={
        id: students.length+1,
        name,
        email
    }

    students.push(newStudent);
    res.json({newStudent});
});




app.listen(3300,()=>{
    console.log('Server running on port 5000');
});
