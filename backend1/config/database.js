const mongoose=require("mongoose")
const connectDatabase=(()=>{
    //DB_URI mai localhost:27017 mat likh error aajata
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log("mongodb connected with server:",data.connection.host);
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=connectDatabase;