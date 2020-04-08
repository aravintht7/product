// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var productSchema = new mongoose.Schema({

    productName: {type: String, required: true},
	brand: {type: String, required: true},
    colour: {type: String, required: true},
    price: {type: Number, required: true },
    size: {type: Number, required: true}
    
});
const Product = module.exports = mongoose.model('Product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}