const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Category.find()
            .then((recipes) => res.send(recipes))
            .catch(next);
    },

    getOne: (req, res, next) => {
        const title = req.params.title
        models.Category.findOne({title: title})
            .then((recipe) => res.send(recipe))
            .catch(next);
    },

    getRecipesByCategory: (req, res, next) => {
        const title = req.params.title
        models.Category.findOne({title: title})
        .then((category) => {
            models.Recipe.find({category: category._id}).populate('reviews')
            .then((recipes) => res.send(recipes.reverse()))
            .catch(next);
        })
        .catch(next)
    },

    post: (req, res, next) => {
        const { title, url, description } = req.body;
        const { _id } = req.user;

        models.Category.create({ title, url, description })
            .then((createdRecipe) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { recipes: createdRecipe } }),
                    models.Category.findOne({ _id: createdRecipe._id })
                ]);
            })
            .then(([modifiedObj, categoryObj]) => {
                res.send(categoryObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, url, description } = req.body;
        models.Category.updateOne({ _id: id }, { title, url, description })
            .then((updatedRecipe) => res.send(updatedRecipe))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Category.deleteOne({ _id: id })
            .then((removedRecipe) => res.send(removedRecipe))
            .catch(next)
    }
};