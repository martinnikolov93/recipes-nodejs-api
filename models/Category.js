const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const categorySchema = new Schema({

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

    //recipes: [{type: ObjectId, ref: "Recipe"}]

});

module.exports = new Model('Category', categorySchema);