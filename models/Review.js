const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const reviewSchema = new Schema({

    rating: {
        type: Number,
        required: true,
    },

    comment: {
        type: String,
    },

    recipe: {
        type: ObjectId,
        ref: "Recipe"
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Review', reviewSchema);