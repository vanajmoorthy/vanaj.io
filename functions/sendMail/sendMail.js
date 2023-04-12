require("dotenv").config();

const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
	process.env.MJ_APIKEY_PUBLIC,
	process.env.MJ_APIKEY_PRIVATE
);

exports.handler = async (event) => {
	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: "vanajmoorthy@gmail.com",
					Name: "Vanaj Relationship Management Service",
				},
				To: [
					{
						Email: event.queryStringParameters.email,
					},
				],
				TemplateID: 4727192,
				TemplateLanguage: true,
				Subject: "Congratulations on renewing your relationship!",
				Variables: {
					partyTwoName: event.queryStringParameters.partyTwoName,
					partyOneName: event.queryStringParameters.partyOneName,
				},
			},
		],
	});

	return request
		.then((result) => {
			return {
				statusCode: 200,
				body: JSON.stringify(result.body),
			};
		})
		.catch((err) => {
			return {
				statusCode: err.statusCode,
				body: JSON.stringify(err),
			};
		});
};
