/*
 * Create errors validations for the program
 */

class ValidationError extends Error {
	// Default error class
	constructor(message) {
		super(message);
		this.name = 'ValidationError';
	}
}

class PropertyRequiredError extends ValidationError {
	// Property required error
	constructor(property) {
		super('No property: ' + property);
		this.name = 'PropertyRequiredError';
		this.property = property;
	}
}

class PropertyNotValidError extends ValidationError {
	// Property not valid error
	constructor(property, validation) {
		super('Property not valid: ' + property);
		this.name = 'PropertyNotValidError';
		this.property = property;
		this.validation = validation;
	}
}

export default { ValidationError, PropertyRequiredError, PropertyNotValidError };
