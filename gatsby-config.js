require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "OMD Pet Travel",
    description: "Your pets trip in First Class"
    // siteUrl: `https://www.omdtravel.com`
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds:  process.env.GATSBY_GOOGLE_PLACE_ID,
        apiKey: process.env.GATSBY_GOGGLE_API_KEY,
        language: "en-US", // optional, defaults to en-US
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/data`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OMD Pet Travel`,
        short_name: `OMD`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#ED7C23`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-offline"
  ],
};
