const app =require("./app")
const dotenv=require("dotenv")
const connectDatabase=require("./config/database.js")
dotenv.config({path:"backend1/config/config.env"})
//call connect database after dotenv as usko fir peocess.env milega ni
connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log("server is working on port http://localhost:", process.env.PORT);
})

//to run write npm run dev  it will automatically do nodemon server.js