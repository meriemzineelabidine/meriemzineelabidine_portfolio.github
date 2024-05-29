const { check, validationResult } = require("express-validator");
exports.RulesContact = () => [
  
    check("name", "name is required").notEmpty(),
    check("email", "email is required").notEmpty(),
    check("email", "chek email again").isEmail(),
    check("message", "message is required").notEmpty(),
   
  ];
  exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).send({ errors: errors.array().map((el)=>({msg:el.msg})) });
    }
    next();
  };