import type { NextApiRequest, NextApiResponse } from 'next'
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey:  process.env.MAILCHIMP_API_KEY,
  server: 'us2',
});

const subscribe =  async (req: NextApiRequest, res: NextApiResponse) => {
	const { email } = JSON.parse(req.body);

	if (!email) {
		return res.status(400).json({
			error: "You have to provide an email. Sorry!",
		});
	}

	try {
		const mcResponse = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
				email_address: email,
				status: "subscribed",
		});

		console.log(mcResponse);

		return res.status(201).json({ error: null });
	} catch (error) {
		console.error(error);
		return res.status(error.status).json({
			error:  error.response,
		});
	}
};

export default subscribe