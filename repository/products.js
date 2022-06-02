const {CategoryRepo} = require("./categories");

class ProductRepo extends InMemoryRepo {
	findByCategory(category_id) {
		let res = []
		let cat = new CategoryRepo().getByID(category_id);
		this.data.forEach((product) => {
			if(product.category === cat) {
				res.push(product);
			}
		})
		return res;
	}
}

module.exports = {
	ProductRepo: ProductRepo
};
