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
		const base64EncodedString = `${clientId}:${clientSecret}`.toString(
			"base64"
		);

		const body = {
			grant_type: "authorization_code",
			code:
				"AQDphVz-i9MVeZciiAscN_bAEqmWeBzu3QOQ3BYgaWuQyxdj-wG5xWntllQlVTi1CHoRyHwHPX24G80HuzGI6HM41o_4xjy0TzpT_rPKww9U8VbFKPGnZpDYKG8YzQSAF9NZd7BjwLevR_HIXdAWdGdPOCqWNz6kDWOlKZCYuI1ZExDM1iFBEVvyN1qb6ULZ6vGF9g18pA",
			redirect_uri: "https://vanajmoorthy.com",
		};
		return fetch(`${spotifyAccountsBaseUri}/api/token`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				Authorization: `Basic ${base64EncodedString}`,
			},
		}).then((response) => {
			console.log(response);
		});
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
					"Cache-Control": "public,max-age=60",
				},
				body: JSON.stringify(data),
			}))
			.catch((error) => ({
				statusCode: 422,
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
				body: String(error),
			}));
	}

	refreshAccessToken();
	getSongs();
};
