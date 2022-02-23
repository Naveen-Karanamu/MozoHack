const mongoose =require("mongoose");
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:4
    },
    category:{
        type:String,
        required:true,
        minLength:4
    },
    target:{
        type:Number,
        required:true,
        minLength:2
    },
    age:{
        type:Number,
        minLength:2
    },
    reason:{
        type:String,
        required:true,
        minLength:15
    },
    gender:{
        type:String,
        required:true
    }
});

const UserModel = mongoose.model("Users",UserSchema);

module.exports=UserModel;