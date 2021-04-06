const express = require('express');
let app = express();
const port = 4000;

const userRoute = require('./Routes/userRouter');

app.get('/',function(req,res){
    res.send('home');
});

app.use('/user',userRoute);

console.log("Application Running on Local http://localhost:"+port);
app.listen(port);
