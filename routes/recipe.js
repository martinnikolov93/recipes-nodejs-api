const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.recipe.get);

router.get('/:id', controllers.recipe.getOne);

router.post('/', auth(), controllers.recipe.post);

router.put('/:id', auth(), controllers.recipe.put);

router.delete('/:id', auth(), controllers.recipe.delete);

module.exports = router;