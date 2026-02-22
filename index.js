const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());

let students=[]

app.get("/students", (req,res)=>{
    res.json({students});
});

app.post("/students/register",(req,res)=>{
    const {name,email,password,role} = req.body;
    if(!name || !email )
    { 
        res.status(400).json({"message":"All fields are required"});
    }
    const newStudent={
        id: students.length+1,
        name,
        email,
        password,
        role
    }

    students.push(newStudent);
    res.json({"success":"true",
        "message":"User registered successfully"
    });
});

app.listen(3300,()=>{
    console.log('Server running on port 3300');
});
