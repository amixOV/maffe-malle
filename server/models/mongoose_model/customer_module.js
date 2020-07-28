const mongoose = require('mongoose')
const Schema = mongoose.Schema;

    const customerSchema = new Schema({
      customer_name :{
        type : String,
        required: true,
        unique: true
      },

      customer_phone :{
        type: String,
        unique: true

      }, 
      customer_mail:{
        type:  String,
        unique: true
      },
      customer_password:{
        type:  String,
        required: true,
        unique: true
      }
    });

module.exports = mongoose.model('customer',  customerSchema);