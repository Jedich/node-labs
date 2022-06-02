const {CategoriesRepo} = require("../repository/categories");
const {Category} = require("../models/category");

var catRepo = new CategoriesRepo();

exports.getAll = function(req, res) {
	res.send(catRepo.getAll());
}