/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'AppReliability',
    author: 'Florian Mari',
    description: 'SRE Mobile Application checklist',
    siteUrl: 'https://appreliability.co',
    social: {
      twitter: '@florianmari',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146337913-1",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
