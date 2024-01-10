const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CategoriesSchema = Schema({
    name: ['lifestyle', 'fashion', 'cinema', 'grooming']
});

const CategoriesModel = model('Category', CategoriesSchema);

module.exports = CategoriesModel;