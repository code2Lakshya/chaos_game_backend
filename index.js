const express=require('express');
const app=express();

require('dotenv').config();

const cors=require('cors');
app.use(cors({
    origin: '*'
}))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const Port=process.env.PORT || 1234;
app.listen(Port,()=>{
    console.log('Server Started At Port:',Port);
})

app.get('/',(req,res)=>{
    res.send('<h1>Welcome To Game Storage</h1>');
})

const {dbConnect}=require('./config/dbConnect');
dbConnect();

const userRoute=require('./routes/userRoute');
const outputRoute=require('./routes/outputRoute');

app.use('/api/v1',userRoute,outputRoute);