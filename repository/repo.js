class InMemoryRepo {
	constructor() {
		this.data = new Map();

	}

	getAll() {
		return this.data.values();
	}

	getByID(id) {
		return this.data.get(id);
	}

	create(id, obj) {
		this.data.set(id, obj);
	}

	update(id, obj) {
		if(this.data.has(id)) {
			this.data.set(id, obj);
		} else {
			throw new Error('No such object');
		}
	}

	delete(id) {
		if(this.data.has(id)) {
			this.data.delete(id);
		} else {
			throw new Error('No such object');
		}
	}
}