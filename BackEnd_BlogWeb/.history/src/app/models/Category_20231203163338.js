const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CategorySchema = new Schema({
    name: ['lifestyle', 'fashion', 'cinema', 'grooming']
});

const CategoryModel = model('Category', CategorySchema);

module.exports = CategoryModel;