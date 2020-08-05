let css = require("css");

module.exports = function (source, map) {
	let name = this.resourcePath.match(/([^/]+).css$/)[1];

	let obj = css.parse(source);

	for (let rule of obj.stylesheet.rules) {
		rule.selectors = rule.selectors.map((selector) =>
			selector.match(new RegExp(`^.${name}`))
				? selector
				: `.${name} ${selector}`
		);
	}

	return `
    let style = document.createElement("style");
    style.innerHTML = ${JSON.stringify(css.stringify(obj))};
    document.head.appendChild(style);
    `;
};
