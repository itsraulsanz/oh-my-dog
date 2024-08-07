import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description = '', lang = 'en', meta = [], title, keywords, siteLocale, robots = '' }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            robots
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = keywords || site.siteMetadata.keywords;
  const metaRobots = robots || site.siteMetadata.robots;
  const defaultTitle = site.siteMetadata?.title;
  const defaultImage = 'https://www.omdtravel.com//static/logo-99b930d15840e2b175b2b9ed896149e6.svg';
  let siteUrl = typeof window !== "undefined" ? window.location.href : "";
  const siteName = 'Ohmydog Luxury Pet Travel';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      defaultImage={defaultImage}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      locale={`${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          name: `robots`,
          content: metaRobots,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:site_name`,
          content: siteName,
        },
                {
          property: `og:locale`,
          content: siteLocale,
        },
        {
          property: `og:keywords`,
          content: metaKeywords,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: defaultImage,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
