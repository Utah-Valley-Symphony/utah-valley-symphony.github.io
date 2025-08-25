module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');
	eleventyConfig.addPassthroughCopy('pages/**/*.css', {
		mode: 'html-relative',
	});

	return {
		dir: {
			input: 'pages',
			includes: '../includes',
			output: '_site',
		},
	};
};
