require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ohmydog Luxury Pet Travel`,
    description: `Your pets trip in First Class: dog's transport, cat's transport, rabbit's transport, pet's transport. El viaje de tu mascota en primera clase: transporte perro, transporte gato, transporte conejo, empresa de transporte de mascotas.`,
    keywords: "Pets, Transport, Dogs",
    robots: "index, follow",
    image: `src/images/logo-favicon.svg/`,
    siteUrl: `https://www.omdtravel.com`
  },
  proxy: {
    prefix: "/api",
    url: "https://maps.googleapis.com",
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
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.omdtravel.com`,
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
        icon: `src/images/logo-favicon.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_GOOGLE_ANALYTICS, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: process.env.GATSBY_GOOGLE_TAG_MANAGER, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        environments: ['production', 'development']
      },
    },
    "gatsby-plugin-offline"
  ],
};
