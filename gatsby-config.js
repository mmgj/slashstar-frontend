require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_PROJECT_ID,
        dataset: process.env.GATSBY_DATA_SET,
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: process.env.WATCH_SANITY,
        overlayDrafts: process.env.WATCH_SANITY,
      },
    },
  ],
};
