import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// data directory
	const dataDirectory = path.join(process.cwd(), 'data');

	//Read the json data file data.json
	const fileContents = await fs.readFile(
		dataDirectory + '/offices.json',
		'utf8'
	);

	//Return the content of the data file in json format
	res.status(200).json(fileContents);
}
