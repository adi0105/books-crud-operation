const http=require('http');
const server=http.createServer((req,res)=>{
if(req.method==='GET'&&req.url==='/'){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("hello everyone!!");

}else{
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("sorry erroer");
}
if(req.method==='GET'&&req.url==="/admin"){
    req.writeHead(300,{"content-type":"text/plain"});
    req.end("hello you are in admin page");
}
})
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})