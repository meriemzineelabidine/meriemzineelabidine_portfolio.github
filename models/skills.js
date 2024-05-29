const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shcemaskills = shcema({
 
 skills: {
    type: String,
    
  }
 
  
});
module.exports = skills = mongosse.model("skills", shcemaskills);
