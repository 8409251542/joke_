const express=require('express');
const jokes=require('./data');

const app=express();

const PORT=800;

app.get('/jokes',(req,res)=>{
    const randomJokes=Math.floor(Math.random()*jokes.length);
    return res.json(jokes[randomJokes]);
})

app.listen(PORT,()=>{
    console.log("server Started");
})