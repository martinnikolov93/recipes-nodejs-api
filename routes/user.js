const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);

router.get('/recipes', controllers.user.getUserRecipes);

router.get('/favourites', controllers.user.getUserFavourites);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/verify', controllers.user.post.verifyLogin);

router.post('/logout', controllers.user.post.logout);

router.post('/favourites/:id', controllers.user.post.addToFav);

router.put('/:id', controllers.user.put);

router.delete('/:id', controllers.user.delete);

router.delete('/favourites/:id', controllers.user.removeFromFav);

module.exports = router;