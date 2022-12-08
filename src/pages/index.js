import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import '../styles/_layout.scss';

import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroWithSlideshow from '../components/hero-with-slideshow/hero-with-slideshow'
import ServicesBlock from '../components/services-block/services-block'
import ArticlePreview from '../components/article-preview'
import TextBlock from '../components/text-block/text-block'
import TextBanner from '../components/text-banner/text-banner'

import LogoDefra from '../images/logo-defra.png'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <HeroWithSlideshow />
        <ServicesBlock />
        <ArticlePreview posts={posts} />
        <TextBanner headingText="How to check a pet Passport?" bodyTexts={[ {text: "You can all the informations regarding pet passport in the PDF in the link below"} ]} buttonText="How to Complete Pet Passports.pdf" />
        <TextBlock id="about-us" headingText="About us" bodyTexts={[ {text: "Ohmydog Pet Travel: We are an international pet travel company specialized in fast and safe journeys between the United Kingdom, Ireland and Spain."}, {text: "We offer a luxury door-to-door service, with a reduced number of pets and 2 drivers with animal welfare trainning."}, {text: "Our vehicles are equipped with an advanced temperature control system and a GPS tracker. The vans have large bespoke crates and veterinary bedding for the comfort of the pets. All our vehicles are ATES and DEFRA approved."} ]} logo={LogoDefra} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`
