var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    email: { type: String, unique: true },
   
    password: {
      type: String
    }
  
  }
);

//Export model
module.exports = mongoose.model('user', UserSchema);

