const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Review.find()
            .then((data) => res.send(data.reverse()))
            .catch(next);
    },

    getOne: (req, res, next) => {
        const id = req.params.id
        models.Review.findById(id)
            .then((review) => res.send(review))
            .catch(next);
    },

    getByRecipeId: (req, res, next) => {
        const id = req.params.id
        models.Review.find({ recipe: id })
            .then((review) => res.send(review))
            .catch(next);
    },

    post: (req, res, next) => {
        const { rating, comment, recipeId } = req.body;
        const { _id } = req.user;

        models.Review.create({ rating, comment, recipe: recipeId, author: _id })
            .then((createdReview) => {
                models.Recipe.updateOne({ _id: recipeId }, { $push: { reviews: createdReview } })
                    .catch(next)

                models.Review.populate(createdReview, { path: 'author' })
                    .then((populatedReview) => {
                        res.send(populatedReview);
                    })
            })
            .catch(next);
    },

    // put: (req, res, next) => {
    //     const id = req.params.id;
    //     const { title, url, categoryId, description } = req.body;
    //     models.Recipe.updateOne({ _id: id }, { title, url, category: categoryId, description })
    //         .then((updatedRecipe) => res.send(updatedRecipe))
    //         .catch(next)
    // },

    // delete: (req, res, next) => {
    //     const id = req.params.id;
    //     models.Recipe.deleteOne({ _id: id })
    //         .then((removedRecipe) => res.send(removedRecipe))
    //         .catch(next)
    // }
};