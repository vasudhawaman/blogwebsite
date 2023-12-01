const mongoose =require('mongoose');
const logSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,'A username is required']
    },
    password:{
        type: String,
        required :[true ,'A password is required'],
        
    }
    
});
let Login = mongoose.model('login',logSchema);

module.exports = Login;