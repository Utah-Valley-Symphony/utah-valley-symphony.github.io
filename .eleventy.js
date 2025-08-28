module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images');
	eleventyConfig.addPassthroughCopy('pages/**/*.css', {
		mode: 'html-relative',
	});
	eleventyConfig.addPassthroughCopy('pages/admin/assets');

	return {
		dir: {
			input: 'pages',
			includes: '../includes',
			output: '_site',
		},
	};
};
