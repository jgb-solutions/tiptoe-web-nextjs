function getRequestParams(email) {
	const API_KEY = process.env.MAILCHIMP_API_KEY;
	const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

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

	return {
		url,
		data,
		headers,
	};
}

export default async (req, res) => {
	const { email } = req.body;

	if (!email || !email.length) {
		return res.status(400).json({
			error: "Forgot to add your email?",
		});
	}

	try {
		const { url, data, headers } = getRequestParams(email);

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
