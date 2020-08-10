import fetch from "node-fetch";
import encoding from "encoding";

const API_ENDPOINT =
	"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=vanajmoorthy&api_key=027290639419a799cfc42d71d39ec7aa&format=json";

exports.handler = async (event, context) => {
	return fetch(API_ENDPOINT, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization:
				"Bearer BQC2oaaAz1bh7725ai_BfWTI8yL8kxFB4LTfoUxCOkntYiOLM68dCM3F1JYhK8NkcuzyIkoqGEYqZX99TBypjGeYDVkW3zwNsbYYYBuZ0OC1dnJdKrUDf3UNrL9zVEWXlIwG_JpHsHkQ9Q4vJ37IoBLlBjARwN_615rDBqaz",
		},
	})
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Headers": "*",
				"Cache-Control": "public,max-age=60",
			},
			body: JSON.stringify(data),
		}))
		.catch((error) => ({
			statusCode: 422,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Headers": "*",
				"Cache-Control": "public,max-age=60",
			},
			body: String(error),
		}));
};
