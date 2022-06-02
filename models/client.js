class Client {
	constructor(id, name, surname, phone, birthdate) {
		this.id = id;
		this.name = name;
		this.surname = name;
		this.phone = phone;
		this.birthdate = birthdate;
	}
}

module.exports = {
	Client: Client
};