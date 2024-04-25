var express="express";
var app=express();
const port =5000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.listen(port,()=>{
    console.log("Server is running")
}

)