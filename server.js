import express from "express";

const app = express();


//port:4040

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})

export default app;