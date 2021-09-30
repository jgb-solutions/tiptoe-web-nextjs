import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.MAILCHIMP_API_KEY
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

const subscribe =  async (req: NextApiRequest, res: NextApiResponse) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({
			error: "You have to provide an email. Sorry!",
		});
	}

	try {
		const prefix = API_KEY.split("-")[1];
		const url = `https://${prefix}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

		const data = {
			email_address: email,
			status: "subscribed",
		};

		const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");

		const headers = {
			"Content-Type": "application/json",
			Authorization: `Basic ${base64ApiKey}`,
		};

		const response = await fetch(url, {
			method: "POST",
			headers,
			body: JSON.stringify(data)
		});

		return res.status(201).json({ error: null });
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			error: error.response.data.title,
		});
	}
};

export default subscribe