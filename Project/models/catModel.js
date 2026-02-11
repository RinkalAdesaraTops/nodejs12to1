const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejs12to1')
  .then(() => console.log('Connected to db!'));
const schema = mongoose.Schema 
const catSchema = new schema({
    catname:String
})
const catModel = mongoose.model('category', catSchema);
module.exports = catModel


