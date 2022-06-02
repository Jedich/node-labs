const {ProductRepo} = require("../repository/products");
const {Product} = require("../models/product");

var productRepo = new ProductRepo();

exports.getAll = function(req, res) {
	res.send(productRepo.getAll());
}

exports.create = function(req, res) {
	console.log(req.body)
	let product = new Product(req.body.id, req.body.name, req.body.category_id, req.body.quantity);
	productRepo.create(product);
	res.send(200);
}

exports.getByID = function(req, res) {
	try {
		res.send(productRepo.getByID(req.query.id))
	} catch (e) {
		res.send(e);
	}
}

exports.update = function(req, res) {
	try {
		productRepo.update(req.query.id);
	} catch (e) {
		res.send(e);
	}
	res.send(200);
}

exports.delete = function(req, res) {
	try {
		productRepo.delete(req.query.id);
	} catch (e) {
		res.send(e);
	}
	res.send(200);
}

exports.getByCategory = function(req, res) {
	try {
		res.send(productRepo.findByCategory(req.query.category_id));
	} catch (e) {
		res.send(e);
	}
}