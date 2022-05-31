import { readFile } from 'fs/promises';

const getConfig = async (configName) => {
	const data = await readFile(`./configs/data/${configName}.json`, 'utf8')
		.then((data) => {
			return JSON.parse(data);
		})
		.catch((err) => {
			console.error(err);
		});

	return data;
};

export default getConfig;
