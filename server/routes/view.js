const router = require('express').Router();
const viewController = require('../controllers/view');

router.get('/allCategories', viewController.viewAllCategories);
router.get('/allProducts', viewController.viewAllProducts);
router.get('/allRecipes/:id', viewController.viewAllRecipes);
router.get('/details/:id', viewController.viewDetails);

module.exports = router;