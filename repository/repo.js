class InMemoryRepo {
	constructor() {
		this.data = new Map();
		this.lastIndex = 0;
	}

	getAll() {
		return this.data.values();
	}

	getByID(id) {
		return this.data.get(id);
	}

	create(obj) {
		this.data.set(this.lastIndex, obj);
		this.lastIndex++;
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