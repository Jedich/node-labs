class ProductRepo extends InMemoryRepo {
	findByCategory(cat) {
		let res = []
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
