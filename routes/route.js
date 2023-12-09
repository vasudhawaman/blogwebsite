const router =require('express').Router();
const List =require("../models/todo"); //adds model exported 
const Login = require("../models/log");

let Isloggedin = false;
let newID = 1;
//allroutes
//home page
router.get('/', async function(req, res) {
   const getall = await List.find();
   
   res.render('./pages/index.ejs',{allblog: getall});
    
   });
router.post('/',async function(req,res){
    const searchall =req.body.search;
    const getall = await List.find({title: searchall});
    res.render('./pages/index.ejs',{allblog: getall });

});
router.get('/delete', function(res,req){
       const titlename = req.query.titlename;
       console.log(titlename);
});
//login
router.get('/login',(req,res)=>{
    
     res.render('./pages/login.ejs');
   });  
router.post('/login',(req,res)=>{
      let Body = req.body;
      let username = String(Body.username).length;
      let password = String(Body.password).length;
      if(username!=0&&password!=0){
        
        let newLogin = new Login({
           username : String(Body.username),
           password :String(Body.password),
           
        });
        newLogin.save();
        res.redirect("/");
        
      }
      else{
        res.redirect("/login");
      }
      
});   
// create page
router.get('/create', function(req, res) {
  res.render('./pages/create.ejs');
});
router.post('/create',(req,res)=>{
  let Body = req.body;
 let  title = String(Body.title).length;
let content = String(Body.content).length;
   if(title!=0 &&content!=0){
  let newTODO = new List({
      title: String(Body.title),
      id: newID,
      content:String(Body.content)
  });
  newTODO.save();
  newID = newID +1;
  res.redirect("/");  
}
else{
  res.redirect("/create"); 
} 
});
router.post('/delete',async (req,res)=>{
 const user = req.query.username;
 
const foundit  = await List.findOneAndDelete({title: user});

    res.redirect('/');
  
});
router.post('/update',async (req,res)=>{
  const user = req.query.username;
  const body = req.body.upd;
  
 const foundit  = await List.updateOne({title: user},{$set:{ content : body}});
 
     res.redirect('/');
   
 });

module.exports = router ;