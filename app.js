const express = require("express");
const app     = express();
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/dosyalar"));








app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});



let port = process.env.PORT;
if(port == "" || port == null){
  port = 5000;
}
app.listen(port, function(){
  console.log("guncel port numarasi : " + port);
});
