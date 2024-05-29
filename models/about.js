const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shcemaabout = shcema({
 
 title: {
    type: String,
    
  },
  description: {
    type: String,
    
  }
  
});
module.exports = about = mongosse.model("about", shcemaabout);
