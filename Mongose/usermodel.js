const mongoose=require('mongoose');
mongoose.connect(`mongodb://localhost:27017/mydatabase`);

const userSchema= mongoose.Schema({
name:String,
username:String,
email:String
});

mongoose.model('User',userSchema);

module.exports=mongoose.model('User',userSchema);