const express = require('express');
const router = express.Router();

const productsController = require("./controllers/products_controller");
const clientsController = require("./controllers/clients_controller");
const catsController = require("./controllers/products_controller");

router.get('/products', productsController.getAll);
router.get('/product/:id', productsController.getByID);
router.get('/products/:cat_id', productsController.getByCategory);
router.post('/add_product', productsController.create);
router.post('/product/:id/update', productsController.update);
router.post('/product/:id/delete', productsController.delete);

router.get('/clients', clientsController.getAll);
router.post('/register', clientsController.create);
router.post('/client/:id', clientsController.getByID);
router.post('/client/:id/delete', clientsController.delete);
router.post('/client/:id/update', clientsController.update);

router.get('/categories', catsController.getAll);

module.exports = router;