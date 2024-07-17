import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { graphql } from 'gatsby';
import get from 'lodash/get';
import '../styles/_layout.scss';
import Seo from "../components/seo";

import Layout from '../components/layout';
import HeroWithSlideshow from '../components/hero-with-slideshow/hero-with-slideshow';
import Banners from '../components/banners/banners';
import TitleAndDescription from '../components/title-and-description/title-and-description';
import ServicesBlock from '../components/services-block/services-block';
import BlogList from '../components/blog-list/blog-list';
import Gallery from '../components/gallery/gallery';
import TextBlock2Columns from '../components/text-block-2columns/text-block-2columns';
import TextBanner from '../components/text-banner/text-banner';
import Reviews from '../components/reviews/reviews';
import Contact from '../components/contact/contact';

import Passport from '../pdf/HowtoCompletePetPassports.pdf';

import LogoDefra from '../images/logo-defra.webp';
import CitySelector from '../components/city-selector/city-selector';

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
    const pdfCalendar = get(this, 'props.data.allContentfulCalendar.nodes[0].pdfFile.file.url')
    const intl = this.props.intlValue;
    const currentYear = new Date().getFullYear();

    const bannersAdvantages = get(this, 'props.data.banners_advantages.nodes');
    const bannersServices = get(this, 'props.data.banners_services.nodes');
    const reviewsData = get(this, 'props.data.reviews')
    const reviews = intl.locale === 'en' ? reviewsData.reviewsEn : reviewsData.reviewsEs
    const citiesSpain = get(this, 'props.data.cities_spain.nodes')
    const citiesUk = get(this, 'props.data.cities_uk.nodes')
    const citiesIreland = get(this, 'props.data.cities_ireland.nodes')
    const services = get(this, 'props.data.allContentfulServices.nodes')

    return (
      <Layout>
        <Seo description={intl.formatMessage({ id: "homepage.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <HeroWithSlideshow titleText={intl.formatMessage({ id: "hero.title" })} subtitleText={intl.formatMessage({ id: "hero.subtitle" })} descriptionText={intl.formatMessage({ id: "hero.description" })} buttonContact={intl.formatMessage({ id: "general.contact" })} />
        
        <TextBlock2Columns color="#ffffff" padding="padding-top" bodyText1={intl.formatMessage({ id: "homepage.intro.description1" })} bodyText2={intl.formatMessage({ id: "homepage.intro.description2" })} bodyText3={intl.formatMessage({ id: "homepage.intro.description3" })} bodyText4={intl.formatMessage({ id: "homepage.intro.description4" })} />

        <TitleAndDescription color="#ffffff" padding="padding-top" border="border-top" subheadingText={intl.formatMessage({ id: "homepage.services.title" })} descriptionText={intl.formatMessage({ id: "homepage.services.description1" })} />
        <Banners color="#ffffff" padding="padding-bottom" banners={bannersServices} />
               
        {/* <TextBlock2Columns color="#FCEEDD" padding="padding" bodyText1={intl.formatMessage({ id: "homepage.about-us.description1" })} bodyText2={intl.formatMessage({ id: "homepage.about-us.description2" })} bodyText3={intl.formatMessage({ id: "homepage.about-us.description3" })} bodyText4={intl.formatMessage({ id: "homepage.about-us.description4" })} /> */}

        <TitleAndDescription color="#FCEEDD" padding="padding-top" subheadingText={intl.formatMessage({ id: "homepage.why-us.title" })} descriptionText={intl.formatMessage({ id: "homepage.why-us.description" })} />
        <Banners color="#FCEEDD" border="border-bottom" banners={bannersAdvantages} />
        
        <Gallery color="#FCEEDD" border="border-top" galleryImages={galleryImagesData} subheadingText={intl.formatMessage({ id: "homepage.gallery.title" })} link={intl.formatMessage({ id: "homepage.gallery.button" })} />

        {/* <ServicesBlock headingText={intl.formatMessage({ id: "services-block.title" })} descriptionText={intl.formatMessage({ id: "services-block.description" })} buttonText={intl.formatMessage({ id: "services-block.button" })} buttonContact={intl.formatMessage({ id: "general.contact-us" })}
        block1Title={intl.formatMessage({ id: "services-block.block-1.title" })} block1Text={intl.formatMessage({ id: "services-block.block-1.text" })} block1Advantage1={intl.formatMessage({ id: "services-block.block-1.advantage1" })} block1Advantage2={intl.formatMessage({ id: "services-block.block-1.advantage2" })} block1Advantage3={intl.formatMessage({ id: "services-block.block-1.advantage3" })} 
        block2Title={intl.formatMessage({ id: "services-block.block-2.title" })} block2Text={intl.formatMessage({ id: "services-block.block-2.text" })} block2Advantage1={intl.formatMessage({ id: "services-block.block-2.advantage1" })} block2Advantage2={intl.formatMessage({ id: "services-block.block-2.advantage2" })} block2Advantage3={intl.formatMessage({ id: "services-block.block-2.advantage3" })} block2Advantage4={intl.formatMessage({ id: "services-block.block-2.advantage4" })}
        block3Title={intl.formatMessage({ id: "services-block.block-3.title" })} block3Text={intl.formatMessage({ id: "services-block.block-3.text" })} block3Advantage1={intl.formatMessage({ id: "services-block.block-3.advantage1" })} block3Advantage2={intl.formatMessage({ id: "services-block.block-3.advantage2" })} 
        block4Title={intl.formatMessage({ id: "services-block.block-4.title" })} block4Text={intl.formatMessage({ id: "services-block.block-4.text" })} block4Advantage1={intl.formatMessage({ id: "services-block.block-4.advantage1" })} block4Advantage2={intl.formatMessage({ id: "services-block.block-4.advantage2" })} block4Advantage3={intl.formatMessage({ id: "services-block.block-4.advantage3" })}
        /> */}
        <Reviews color="#FCEEDD" border="border-top" padding="padding" reviews={reviews} rating={reviewsData.rating} userRating={reviewsData.userRating} headingText={intl.formatMessage({ id: "reviews.title" })} reviewsText={intl.formatMessage({ id: "reviews.reviewsText" })} />
        
        {/* <CitySelector color="#ffffff" padding="padding" citiesSpain={citiesSpain} citiesUk={citiesUk} citiesIreland={citiesIreland} services={services} subheadingText={intl.formatMessage({ id: "homepage.services.subheadingText" })} descriptionText={intl.formatMessage({ id: "homepage.services.description2" })} servicesFromSpain={intl.formatMessage({ id: "homepage.services.services-spain" })} servicesFromUk={intl.formatMessage({ id: "homepage.services.services-uk" })} servicesFromIreland={intl.formatMessage({ id: "homepage.services.services-ireland" })} /> */}

        <BlogList padding="padding-top" posts={postsData} subheadingText={intl.formatMessage({ id: "blog.title" })} descriptionText={intl.formatMessage({ id: "blog.description" })} link={intl.formatMessage({ id: "blog.title" })} />
        {/* <TextBanner id="passport" color="green" pdf={Passport} headingText={intl.formatMessage({ id: "passport.title" })} descriptionText1={intl.formatMessage({ id: "passport.description1" })} buttonText={intl.formatMessage({ id: "passport.button-text" })} /> */}
        {/* <Gallery galleryImages={galleryImagesData} headingText={intl.formatMessage({ id: "gallery.title" })} descriptionText={intl.formatMessage({ id: "gallery.description" })} /> */}
        {/* <TextBanner id="trips" color="orange" pdfCalendar={pdfCalendar} headingText={intl.formatMessage({ id: "trips.title" })} descriptionText1={intl.formatMessage({ id: "trips.description1" })} descriptionText2={intl.formatMessage({ id: "trips.description2" })} buttonText={intl.formatMessage({ id: "trips.button-text" })} year={currentYear} /> */}
        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
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
    allContentfulGalleryImage(sort: { fields: order, order: ASC } filter: { featuredHomepage: {eq: true}, node_locale: { eq: $language } }) {
      nodes {
        title
        order
        span
        image {
          url
          gatsbyImage(
            layout: CONSTRAINED, 
            placeholder: BLURRED, 
            width: 1200, 
            height: 800
          )
        }
      }
    }
    allContentfulCalendar(filter: { node_locale: { eq: $language } }) {
      nodes {
        pdfFile {
          file {
            url
          }
        }
      }
    }
    banners_advantages: allContentfulBanner(sort: { fields: orderId, order: ASC } filter: { section: {eq: "advantages"}, node_locale: { eq: $language } }) {
      nodes {
        section
        title
        image {
          gatsbyImage(
            layout: CONSTRAINED, 
            placeholder: BLURRED, 
            width: 1200, 
            height: 1200
          )
        }
      }
    }
    banners_services: allContentfulBanner(sort: { fields: orderId, order: ASC } filter: { section: {eq: "pet-transport"}, node_locale: { eq: $language } }) {
      nodes {
        section
        url
        title
        image {
          url
          gatsbyImage(
            layout: CONSTRAINED, 
            placeholder: BLURRED, 
            width: 1200, 
            height: 1200
          )
        }
      }
    }
    cities_spain: allContentfulCityServices(sort: {fields: cityName} filter: {country: {eq: "Spain"}, node_locale: { eq: $language }}) {
      nodes {
        cityName
        slug
        country
      }
    }
    cities_uk: allContentfulCityServices(sort: {fields: cityName} filter: {country: {eq: "UK"}, node_locale: { eq: $language }}) {
      nodes {
        cityName
        slug
        country
      }
    }
    cities_ireland: allContentfulCityServices(sort: {fields: cityName} filter: {country: {eq: "Ireland"}, node_locale: { eq: $language }}) {
      nodes {
        cityName
        slug
        country
      }
    }
    allContentfulServices(filter: { node_locale: { eq: $language } }) {
      nodes {
        serviceName
        slug
        id
      }
    }
    reviews {
      rating
      userRating
      reviewsEn {
        author_name
        profile_photo_url
        rating
        relative_time_description
        text
        time
      }
      reviewsEs {
        author_name
        profile_photo_url
        rating
        relative_time_description
        text
        time
      }
    }
  }
`
export default withMyHook(IndexPage);
