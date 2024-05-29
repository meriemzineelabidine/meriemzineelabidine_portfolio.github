const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shcemacontact = shcema({
 
name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  message: {
    type: String,
    
  }
 
  
});
module.exports =contact = mongosse.model("contact", shcemacontact);
