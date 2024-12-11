// const http = require('http');   
// const server = http.createServer((req, res) => {
//     if(req.method==='GET'&&req.url==='/vikas'){
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end("Hello Everyone i am aditya!!!");
//     }else{
//         res.writeHead(404,{'content-type':'text/plain'})
//         res.end("Not Found");
//     }
  
// })
// server.listen(3000,()=>{
//     console.log("Server is running on http://localhost:3000");
// })
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
const app = express();
const PORT=process.env.PORT;
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
app.get('/',(req,res)=>{
  res.send("Hello Everyone my name is aditya!!");  
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views","SignUp.html"))
})
// app.get('/aditya',(req,res)=>{
//     res.json({"helo this is aditya"})
// })
app.use(
    express.static(path.join(__dirname,"views")))

app.listen(PORT,()=>{
     console.log(`Server is running on http://localhost:${PORT}`);    
})

