import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import '../styles/_layout.scss';

import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroWithSlideshow from '../components/hero-with-slideshow/hero-with-slideshow'
import ServicesBlock from '../components/services-block/services-block'
import ArticlePreview from '../components/article-preview/article-preview'
import TextBlock from '../components/text-block/text-block'
import TextBanner from '../components/text-banner/text-banner'
import Contact from '../components/contact/contact'

import LogoDefra from '../images/logo-defra.png'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class IndexPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlog.nodes')
    const intl = this.props.intlValue;

    return (
      <Layout>
        <HeroWithSlideshow />
        <ServicesBlock />
        <ArticlePreview posts={posts} />
        <TextBanner color="green" headingText="How to check a pet Passport?" bodyTexts={[ {text: "You can all the informations regarding pet passport in the PDF in the link below"} ]} buttonText="How to Complete Pet Passports.pdf" />
        <TextBlock id="about-us" headingText={intl.formatMessage({ id: "about-us.title" })} bodyTexts={intl.formatMessage({ id: "about-us.description" })} logo={LogoDefra} />
        <TextBanner color="orange" headingText="Our Trips for 2022" bodyTexts={[ {text: "You can all the informations regarding our trips program for 2022 in the pdf below"} ]} buttonText="Trips Program 2022.pdf" />
        <Contact id="contact-us" headingText="Contact us" bodyTexts={[ {text: "If you have any questions about our services, please fill out the following form and we will contact you shortly. You can also call us during office hours."} ]} openDays="Monday-Friday" openHours="8:30am-5:30pm" closedDays="Saturday-Sunday" telephone="1-659-876-768" email="Ohmydog@mail.com" buttonText="Contact Us" />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulBlog(sort: { fields: [publishDate], order: DESC } filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        path
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          url
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
          file {
            url
          }
        }
        description {
          raw
        }
      }
    }
  }
`
export default withMyHook(IndexPage);
