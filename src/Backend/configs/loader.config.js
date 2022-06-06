import { readFile } from 'fs/promises';

/*
 * Loader configuration for the client-side bundle
 * @param {string} path - path to the file to be loaded
 * @returns {object} - object of the file contents (as a json)
 */
const getConfig = async (configName) => {
	const data = await readFile(`./configs/data/${configName}.json`, 'utf8') // Read file from configs/data with name 'configName'
		.then((data) => {
			// If success
			return JSON.parse(data); // Parse data to json
		})
		.catch((err) => {
			// If error
			console.error(err); // Print error
		});

	return data; // Return data
};

export default getConfig;
