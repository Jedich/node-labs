const {InMemoryRepo} = require("./repo");

class ClientRepo extends InMemoryRepo {
	findByName(name) {
		let res = []
		this.data.forEach((client) => {
			if(client.name === name) {
				res.push(client);
			}
		})
		return res;
	}
}

module.exports = {
	ClientRepo: ClientRepo
};
