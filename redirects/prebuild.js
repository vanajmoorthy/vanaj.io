const apps = require("./apps.json")
	.map((app) => {
		return `https://vanaj.io/${app} https://vanaj.io/${app}/index.html 302
https://vanaj.io/${app}/* https://${app}-vanajmoorthy.netlify.app/:splat 200!`;
	})
	.join("\n\n");

const fs = require("fs");

const template = fs.readFileSync("redirects/_redirects-template", "utf-8");

const output = template.replace("$APP_REDIRECTS", apps);

fs.writeFileSync("public/_redirects", output);
