import colors from 'colors';

class ConsoleUtils {
	/*
	 * Implement time for console log
	 * No parameters
	 * Return nothing
	 */
	static addTimeOnConsole() {
		var log = console.log; // Save console.log function

		console.log = function () {
			var first_parameter = arguments[0]; // Get first parameter
			var other_parameters = Array.prototype.slice.call(arguments, 1); // Get other parameters

			function formatConsoleDate(date) {
				// Format date on console

				var hour = date.getHours(); // Get hour
				var minutes = date.getMinutes(); // Get minutes
				var seconds = date.getSeconds(); // Get seconds
				var milliseconds = date.getMilliseconds(); // Get milliseconds

				let consoleTime =
					'[' +
					(hour < 10 ? '0' + hour : hour) +
					':' +
					(minutes < 10 ? '0' + minutes : minutes) +
					':' +
					(seconds < 10 ? '0' + seconds : seconds) +
					'.' +
					('00' + milliseconds).slice(-2) +
					']'; // Create console time
				return consoleTime.bgBrightMagenta.black + ' '; // Return console time
			}

			log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(other_parameters)); // Call console.log function with console time and other parameters
		};
	}
}

export default ConsoleUtils;
