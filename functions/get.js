import fetch from "node-fetch";

const API_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";

exports.handler = async (event, context) => {
	return fetch(API_ENDPOINT, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization:
				"Bearer BQAHKyRYX9zRev0rU2HHHbFv7vHgZwOHTFzOlEIHXW51R9nNoWtkNsjGDCPnzABWs0_B50GLg2xmeAYrJTFZZqe8U2R8b7GvkJtRI-tY_XUSOp7u59XxGxtwd_sbhZkUEfta_iyYyGuGkJXL-wXjjvSz6vg4kewPaOYZnKUq",
			"Access-Control-Allow-Origin": "*",
		},
	})
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			body: data,
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));
};
