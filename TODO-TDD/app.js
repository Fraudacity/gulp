const express = require("express");
const app =express();
app.get("/", (req,res)=> {
    res.json("Helloww orld");

});

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
});