
const mongoose =require('mongoose');

 const listSchema = new  mongoose.Schema({
    title:{
        type:String,
    required : true},
    content:{
        type:String,
        required:true
    }

 });
  let List = mongoose.model("todo",listSchema);
 module.exports =  List; //export modelss