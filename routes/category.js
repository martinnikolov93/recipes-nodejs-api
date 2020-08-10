const controllers = require('../controllers');
const router = require('express').Router();
//const { auth } = require('../utils');

router.get('/', controllers.category.get);

router.get('/:title', controllers.category.getOne);

router.get('/recipes/:title', controllers.category.getRecipesByCategory);

// router.post('/', auth(), controllers.category.post);

// router.put('/:id', auth(), controllers.category.put);

// router.delete('/:id', auth(), controllers.category.delete);

module.exports = router;