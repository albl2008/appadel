const moongose = require('mongoose');

const { Schema } = moongose;

const requiredNumber = {
    type: Number,
    required: true
}


const placeSchema = new Schema({
  name:{
    type: String,
    required: true,
  }, 
  material: String,
  tel: requiredNumber,
  courtQty: { 
      type: Number, 
      default: 1 
    },
  rating:{
      type: Number,
      min: 1,
      max: 5,
      default: 1
  },
  longitude: {
  ...requiredNumber,
  min: -180,
  max:180,
  },
  latitude: {
    ...requiredNumber,
    min:-90,
    max:90,
  },
  image: String
});

const Place = moongose.model('Place',placeSchema);

module.exports = Place