const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CategoriesSchema = new Schema({
    title: String,
    content: String,
    categories: String,
    cover: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true, 
});

const CategoriesModel = model('Categories', CategoriesSchema);

module.exports = CategoriesModel;