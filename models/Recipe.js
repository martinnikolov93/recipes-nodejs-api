const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const recipeSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: ObjectId,
        ref: "Category"
    },

    reviews: [{type: ObjectId, ref: "Review"}],

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Recipe', recipeSchema);