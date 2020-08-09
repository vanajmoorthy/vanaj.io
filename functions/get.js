exports.handler = async (event, context) => {
	return {
		statusCode: 200,
		headers: { "Access-Control-Allow-Origin": "vanajmoorthy.com" },
		body: "GREETING",
	};
};
