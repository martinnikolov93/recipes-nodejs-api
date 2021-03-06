const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.review.get);

router.get('/:id', controllers.review.getOne);

router.get('/recipe/:id', controllers.review.getByRecipeId);

router.post('/', auth(), controllers.review.post);

// router.put('/:id', auth(), controllers.review.put);

// router.delete('/:id', auth(), controllers.review.delete);

module.exports = router;