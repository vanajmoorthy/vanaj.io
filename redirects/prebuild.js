const apps = require("./apps.json")
	.map((app) => {
		return `https://www.vanajmoorthy.com/${app} https://www.vanajmoorthy.com/${app}/index.html 302
https://www.vanajmoorthy.com/${app}/* https://${app}-vanajmoorthy.netlify.app/:splat 200!`;
	})
	.join("\n\n");

const fs = require("fs");

const template = fs.readFileSync("redirects/_redirects-template", "utf-8");

const output = template.replace("$APP_REDIRECTS", apps);

fs.writeFileSync("_redirects", output);

// https://www.vanajmoorthy.com/morph https://www.vanajmoorthy.com/morph/index.html 302
// https://www.vanajmoorthy.com/morph/* https://morph-vanajmoorthy.netlify.com/:splat 200!

// https://www.vanajmoorthy.com/obstacles https://www.vanajmoorthy.com/obstacles/index.html 302
// https://www.vanajmoorthy.com/obstacles/* https://obstacles-vanajmoorthy.netlify.com/:splat 200!

// https://www.vanajmoorthy.com/graph https://www.vanajmoorthy.com/graph/index.html 302
// https://www.vanajmoorthy.com/graph/* https://graph-vanajmoorthy.netlify.com/:splat 200!
