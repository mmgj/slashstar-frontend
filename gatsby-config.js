require('dotenv').config();

module.exports = {
  plugins: [
    // 'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_PROJECT_ID,
        dataset: process.env.GATSBY_DATA_SET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
};