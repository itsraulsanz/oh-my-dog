import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { useIntl } from "gatsby-plugin-intl"

import '../styles/_layout.scss';

import Layout from '../components/layout'
import HeroWithSlideshow from '../components/hero-with-slideshow/hero-with-slideshow'
import ServicesBlock from '../components/services-block/services-block'
import BlogList from '../components/blog-list/blog-list';
import Gallery from '../components/gallery/gallery';
import TextBlock2Columns from '../components/text-block-2columns/text-block-2columns'
import TextBanner from '../components/text-banner/text-banner'
import Reviews from '../components/reviews/reviews'
import Contact from '../components/contact/contact'

import Calendar from '../pdf/TripsProgram.pdf'
import Passport from '../pdf/HowtoCompletePetPassports.pdf'

import LogoDefra from '../images/logo-defra.png'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class IndexPage extends React.Component {
  render() {
    const postsData = get(this, 'props.data.allContentfulBlog.nodes')
    const galleryImagesData = get(this, 'props.data.allContentfulGalleryImage.nodes')
    const reviewsData = get(this, 'props.data.googlePlacesPlace')
    const intl = this.props.intlValue;
    const currentYear = new Date().getFullYear();

    return (
      <Layout>
        <HeroWithSlideshow headingText={intl.formatMessage({ id: "hero.title" })} descriptionText={intl.formatMessage({ id: "hero.description" })} buttonContact={intl.formatMessage({ id: "general.contact-us" })} />
        <ServicesBlock headingText={intl.formatMessage({ id: "services-block.title" })} descriptionText={intl.formatMessage({ id: "services-block.description" })} buttonText={intl.formatMessage({ id: "services-block.button" })} buttonContact={intl.formatMessage({ id: "general.contact-us" })}
        block1Title={intl.formatMessage({ id: "services-block.block-1.title" })} block1Text={intl.formatMessage({ id: "services-block.block-1.text" })} block1Advantage1={intl.formatMessage({ id: "services-block.block-1.advantage1" })} block1Advantage2={intl.formatMessage({ id: "services-block.block-1.advantage2" })} block1Advantage3={intl.formatMessage({ id: "services-block.block-1.advantage3" })} 
        block2Title={intl.formatMessage({ id: "services-block.block-2.title" })} block2Text={intl.formatMessage({ id: "services-block.block-2.text" })} block2Advantage1={intl.formatMessage({ id: "services-block.block-2.advantage1" })} block2Advantage2={intl.formatMessage({ id: "services-block.block-2.advantage2" })} block2Advantage3={intl.formatMessage({ id: "services-block.block-2.advantage3" })} block2Advantage4={intl.formatMessage({ id: "services-block.block-2.advantage4" })}
        block3Title={intl.formatMessage({ id: "services-block.block-3.title" })} block3Text={intl.formatMessage({ id: "services-block.block-3.text" })} block3Advantage1={intl.formatMessage({ id: "services-block.block-3.advantage1" })} block3Advantage2={intl.formatMessage({ id: "services-block.block-3.advantage2" })} block3Advantage3={intl.formatMessage({ id: "services-block.block-3.advantage3" })}
        block4Title={intl.formatMessage({ id: "services-block.block-4.title" })} block4Text={intl.formatMessage({ id: "services-block.block-4.text" })} block4Advantage1={intl.formatMessage({ id: "services-block.block-4.advantage1" })} block4Advantage2={intl.formatMessage({ id: "services-block.block-4.advantage2" })} block4Advantage3={intl.formatMessage({ id: "services-block.block-4.advantage3" })}
        />
        <BlogList posts={postsData} headingText={intl.formatMessage({ id: "blog.title" })} descriptionText={intl.formatMessage({ id: "blog.description" })} />
        <TextBanner id="passport" color="green" pdf={Passport} headingText={intl.formatMessage({ id: "passport.title" })} descriptionText1={intl.formatMessage({ id: "passport.description1" })} buttonText={intl.formatMessage({ id: "passport.button-text" })} />
        <TextBlock2Columns id="about-us" headingText={intl.formatMessage({ id: "about-us.title" })} bodyText1={intl.formatMessage({ id: "about-us.description1" })} bodyText2={intl.formatMessage({ id: "about-us.description2" })} bodyText3={intl.formatMessage({ id: "about-us.description3" })} bodyText4={intl.formatMessage({ id: "about-us.description4" })} logo={LogoDefra} />
        <Gallery galleryImages={galleryImagesData} headingText={intl.formatMessage({ id: "gallery.title" })} descriptionText={intl.formatMessage({ id: "gallery.description" })} />
        <TextBanner id="trips" color="orange" pdf={Calendar} headingText={intl.formatMessage({ id: "our-trips-banner.title" })} descriptionText1={intl.formatMessage({ id: "our-trips-banner.description1" })} descriptionText2={intl.formatMessage({ id: "our-trips-banner.description2" })} buttonText={intl.formatMessage({ id: "our-trips-banner.button-text" })} year={currentYear} />
        <Reviews userReviews={reviewsData} headingText={intl.formatMessage({ id: "reviews.title" })} descriptionText={intl.formatMessage({ id: "reviews.description" })} reviewsText={intl.formatMessage({ id: "reviews.reviewsText" })} />
        <Contact headingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulBlog(sort: { fields: orderId, order: DESC } filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        path
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
        buttonText
      }
    }
    allContentfulGalleryImage(sort: { fields: order, order: DESC } filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        order
        image {
          url
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
    googlePlacesPlace {
      name
      rating
      childrenGooglePlacesReview {
        author_name
        text
        rating
        profile_photo_url
      }
      user_ratings_total
    }
  }
`
export default withMyHook(IndexPage);
