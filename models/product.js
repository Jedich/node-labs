class Product {
	constructor(id, name, category, quantity) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.quantity = quantity;
	}
}

module.exports = {
	Product: Product
};