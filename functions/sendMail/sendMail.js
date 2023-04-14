require("dotenv").config();

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: "api",
	key: process.env.MAILGUN_API_KEY,
});

exports.handler = async (event) => {
	const result = await mg.messages.create(
		"sandbox7bff322fd80f4a34a7d1616ea17f3914.mailgun.org",
		{
			from:
				"Vanaj Relationship Management Service <mailgun@sandbox7bff322fd80f4a34a7d1616ea17f3914.mailgun.org>",
			to: [event.queryStringParameters.email],
			subject: "Congratulations on renewing your relationship!",
			text: "Congratulations on renewing your relationship!",
			html: `<h1>Congratulations on renewing your relationship!</h1><p>Signed by ${event.queryStringParameters.partyOneName} and ${event.queryStringParameters.partyTwoName}</p>`,
		}
	);

	return {
		statusCode: result.status,
		body: JSON.stringify(result.messages),
	};
};
