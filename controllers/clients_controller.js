const {ClientRepo} = require("../repository/clients");
const {Client} = require("../models/client");

var clientRepo = new ClientRepo();

exports.getAll = function(req, res) {
	res.send(clientRepo.getAll());
}

exports.getByID = function (req, res) {
	try {
		res.send(clientRepo.getByID(req.query.id))
	} catch (e) {
		res.send(e);
	}
}

exports.create = function(req, res) {
	let client = new Client(req.body.id, req.body.name, req.body.surname, req.body.phone, req.body.birthdate);
	clientRepo.create(client);
	res.send(200);
}

exports.update = function(req, res) {
	try {
		clientRepo.update(req.query.id);
	} catch (e) {
		res.send(e);
	}
	res.send(200);
}

exports.delete = function(req, res) {
	try {
		clientRepo.delete(req.query.id);
	} catch (e) {
		res.send(e);
	}
	res.send(200);
}