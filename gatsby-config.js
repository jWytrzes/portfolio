const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Joanna Wytrzęś | Portfolio`,
		author: `Joanna Wytrzęś`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Montserrat`,
						variants: [`400`, `600`, `700`, `900`],
						subsets: ['latin-ext'],
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`),
			},
		},
		{
			resolve: 'gatsby-plugin-svgr',
			options: {
				svgoConfig: {
					plugins: [{ removeViewBox: false }],
				},
			},
		},
	],
};
