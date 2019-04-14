const proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/projects`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000/',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
};
