import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { graphql } from 'gatsby';
import get from 'lodash/get';
import '../styles/_layout.scss';
import Seo from "../components/seo";

import Layout from '../components/layout';
import HeroWithSlideshow from '../components/hero-with-slideshow/hero-with-slideshow';
import ImgAndText from '../components/img-and-text-block/img-and-text-block';
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

class WhyUs extends React.Component {
  render() {
    const intl = this.props.intlValue;

    const citiesSpain = get(this, 'props.data.cities_spain.nodes')
    const citiesUk = get(this, 'props.data.cities_uk.nodes')
    const citiesIreland = get(this, 'props.data.cities_ireland.nodes')
    //const services = get(this, 'props.data.allContentfulServices.nodes')
    const services = get(this, 'props.data.allContentfulTransportOptions.nodes')

    const blocksCommitment = get(this, 'props.data.allContentfulTextContent.nodes');

    const heroImage = get(this, 'props.data.heroImage')

    return (
      <Layout>
        <Seo description={intl.formatMessage({ id: "homepage.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        
        <TitleAndDescription headingText={intl.formatMessage({ id: "why-us.title" })} descriptionText={intl.formatMessage({ id: "why-us.description" })} color="#ffffff" padding="padding-top" />
        
        <ImgAndText color="#ffffff" padding="padding-bottom" blocks={blocksCommitment} />

        <CitySelector border="border-top" color="#ffffff" padding="padding-bottom" services={services} citiesSpain={citiesSpain} citiesUk={citiesUk} citiesIreland={citiesIreland} subheadingText={intl.formatMessage({ id: "homepage.services.subheadingText" })} descriptionText={intl.formatMessage({ id: "homepage.services.description2" })} servicesFromSpain={intl.formatMessage({ id: "homepage.services.services-spain" })} servicesFromUk={intl.formatMessage({ id: "homepage.services.services-uk" })} servicesFromIreland={intl.formatMessage({ id: "homepage.services.services-ireland" })} />

        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    heroImage: contentfulAsset(id: {eq: "19b679a8-d437-5138-8bf2-7e9b531c082f"}) {
      __typename
      gatsbyImageData
      file {
        url
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
    allContentfulTextContent(filter: { websiteSection: {eq: "why-us"}, node_locale: { eq: $language } }) {
      nodes {
        title
        textContent {
          raw
        }
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
    allContentfulTransportOptions(filter: {node_locale: { eq: $language }}) {
      nodes {
        slug
        service
      }
    }
  }
`
export default withMyHook(WhyUs);
