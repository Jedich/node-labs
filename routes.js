var express = require('express');
var app = express();

const productsController = require("./controllers/products_controller");
const clientsController = require("./controllers/clients_controller");
const catsController = require("./controllers/products_controller");

app.get('/products', productsController.getAll);
app.get('/product/:id', productsController.getByID);
app.get('/products/:cat_id', productsController.getByCategory);
app.post('/add_product', productsController.create);
app.post('/product/:id/update', productsController.update);
app.post('/product/:id/delete', productsController.delete);

app.get('/clients', clientsController.getAll);
app.post('/register', clientsController.create);
app.post('/client/:id', clientsController.getByID);
app.post('/client/:id/delete', clientsController.delete);
app.post('/client/:id/update', clientsController.update);

app.get('/categories', catsController.getAll);