const mongoose = require('mongoose')
const Schema = mongoose.Schema;

    const productSchema = new Schema({
      product_id :{
      type : String,
        required: true,
        index: true,
        unique: true
     
        /* type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true, */
      },

      product_name :{
        type: String,
        required: true,
        unique: true

      }, 


/* 
      basic_product:{
       type: schema.objectId,
       ref: 'basic_product'

      },
      wheigt:{
        type: Number
      }   
 */
    });

module.exports = mongoose.model('products',  productSchema);