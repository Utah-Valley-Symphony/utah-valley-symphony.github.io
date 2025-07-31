module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images");

	return {
		dir: {
			input: "pages",
			includes: "../includes",
			output: "_site",
		},
	};
};
