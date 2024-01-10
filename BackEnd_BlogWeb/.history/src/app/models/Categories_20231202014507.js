const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CategoriesSchema = new Schema({
    name: String,
}, {
    timestamps: true, 
});

const CategoriesModel = model('Categories', CategoriesSchema);

module.exports = CategoriesModel;