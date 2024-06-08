const mongoose = require("mongoose");
const schema = mongoose.Schema;

const restaurantSchema = new schema({
    name : {type:String , required:true},
    adress : {type:String , required:true},
    description : {type:String , required:true},
    owner : {type:String , required:true},
    image : {type:String , required:true},
   
    }
  );
  
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);
  module.exports = Restaurant ;
