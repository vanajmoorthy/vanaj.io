import fetch from "node-fetch";
import encoding from "encoding";

const spotifyAPIBaseUri = "https://api.spotify.com";
const spotifyAccountsBaseUri = "https://accounts.spotify.com";

const clientId = "88b97c470479424f8fa87bc1c36601a5";
const clientSecret = "eceba6a724b9427f90fa56416f035735";
const refreshToken =
	"AQC8YqyeDELEF-XOTNONaBZnzYztSWxBTeslQLPkKQxHQcWgo4i8Rm-2n4aRaL64mVUuS2ydj4Bo_NFk__Z53z4vE1CMPn3xjeenfeVbtaLubiygmxgJDlN_9RmwxNUzd68";
let accessToken = "";

exports.handler = (event, context) => {
	function refreshAccessToken() {
		return fetch(`${spotifyAccountsBaseUri}/api/token`, {
			method: "POST",
			body: `grant_type=refresh&refresh_token=${refreshToken}`,
			headers: {
				Authorization: `Basic ${new Buffer(
					`${clientId}:${clientSecret}`
				).toString("base64")}`,
			},
		}).then((response) =>
			response.json().then((data) => (accessToken = data))
		);
	}

	function getSongs() {
		return fetch(`${spotifyAPIBaseUri}/v1/me/player/recently-played`, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
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
	}

	refreshAccessToken();
	getSongs();
};
