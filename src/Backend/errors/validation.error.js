class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'ValidationError';
	}
}

class PropertyRequiredError extends ValidationError {
	constructor(property) {
		super('No property: ' + property);
		this.name = 'PropertyRequiredError';
		this.property = property;
	}
}

class PropertyNotValidError extends ValidationError {
	constructor(property, validation) {
		super('Property not valid: ' + property);
		this.name = 'PropertyNotValidError';
		this.property = property;
		this.validation = validation;
	}
}

export default { ValidationError, PropertyRequiredError, PropertyNotValidError };
