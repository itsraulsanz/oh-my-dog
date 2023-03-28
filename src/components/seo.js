import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import omdLogo from "../images/logo.svg"

const Seo = ({ description = '', lang = 'en', meta = [], title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: {description},
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: {title},
        },
        {
          property: `og:description`,
          content: {description},
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: {omdLogo},
        },
      ].concat(meta)}
    />
  )
}

export default Seo
