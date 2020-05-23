module.exports = {
  siteMetadata: {
    title: `Vacay for Democracy`,
    description: `Empowering voters where it matters most`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/vicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-vacayfordemocracy.pantheonsite.io/`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://vacay-dem.netlify.app/` // required!
      }
    }
  ],
}
