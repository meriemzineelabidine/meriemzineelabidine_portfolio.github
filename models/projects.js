const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shcemaprojects = shcema({
 
 title: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  img: {
    type: String,
    
  }
 
  
});
module.exports = projects = mongosse.model("projects", shcemaprojects);
