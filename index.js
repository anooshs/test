import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
const app = express();

import router from "./router/router.js";

mongoose.connect('mongodb://127.0.0.1:27017/localdb');

app.listen(process.env.PORT, ()=> {
    console.log(`server running in ${process.env.PORT}`);
});

app.use('/api',router);

app.use('/get', (req, res, next)=> {
    console.log('test');
    const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
    res.json({succeess: true, message:'testing get'});
});

app.use('/', (req, res, next)=> {
    res.json({message: 'testing default route'});
});