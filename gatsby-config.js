module.exports = {
  siteMetadata: {
    title: `Joanna Wytrzęś | Portfolio`,
    author: `Joanna Wytrzęś`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`, `900`],
          },
        ],
      },
    },
  ],
}
