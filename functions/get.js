import fetch from "node-fetch";
import encoding from "encoding";

const API_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";

exports.handler = async (event, context) => {
	return fetch(API_ENDPOINT, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization:
				"Bearer BQAHKyRYX9zRev0rU2HHHbFv7vHgZwOHTFzOlEIHXW51R9nNoWtkNsjGDCPnzABWs0_B50GLg2xmeAYrJTFZZqe8U2R8b7GvkJtRI-tY_XUSOp7u59XxGxtwd_sbhZkUEfta_iyYyGuGkJXL-wXjjvSz6vg4kewPaOYZnKUq",
		},
	})
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Headers": "*",
			},
			body: data,
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));
};
