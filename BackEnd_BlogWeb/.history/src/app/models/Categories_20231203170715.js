const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CategoriesSchema = Schema({
    name: {
        type: String,
        required: true,
    },
})

const CategoriesModel = model('Category', CategoriesSchema);

module.exports = CategoriesModel;