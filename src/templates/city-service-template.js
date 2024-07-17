import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { useIntl } from "gatsby-plugin-intl"
import './city-service-template.scss'

import Seo from '../components/seo'
import Layout from '../components/layout'

import TitleAndDescription from '../components/title-and-description/title-and-description';
import Banners from '../components/banners/banners';
import Contact from '../components/contact/contact';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class CityTemplate extends React.Component {
  render() {
    const intl = this.props.intlValue;

    const city = get(this.props, 'data.contentfulCityServices');
    const service = get(this.props, 'data.contentfulServices');
    const bannersServices = get(this, 'props.data.banners_services.nodes');

    let pathname = typeof window !== "undefined" ? window.location.pathname : "";
    const locationLanguage = pathname.split("/")[1];

    console.log('city.slug: ', city.slug);
    //console.log('service.slug: ', service.slug);
    
    // const serviceSlugTranslation = (locationLanguage + '/' + city.slug + '-' + get(this.props, 'data.allContentfulServices.nodes[0].slug'))

    // const seoTitle = intl.formatMessage({ id: "cities." + service.slug + ".meta-title1" }) + ' ' + city.cityName + ' ' + intl.formatMessage({ id: "cities." + service.slug + ".meta-title2" })  + ' ' + city.cityName;
    // const seoDescription = intl.formatMessage({ id: "cities." + service.slug + ".meta-description1" }) + ' ' + city.cityName + ' ' + intl.formatMessage({ id: "cities." + service.slug + ".meta-description2" });

    // console.log('city.slug: ', city);
    // console.log('service.slug: ', service);

    // console.log('MIX: ', (service.slug + ' - ' + city.cityName));

    const seoTitle = "city.cityName";
    const seoDescription = "city.cityName";

    return (
      <Layout location={this.props.location}>
        <Seo
          title={seoTitle} 
          description={seoDescription}
        />
        <div className="city-service-template">
          <div className="container-fluid">
            <div className="city-service-template__details">
              {/* <h1 className="city-service-template__details-title">{service.serviceName} {intl.formatMessage({ id: "cities.title-connector" })} {city.cityName}</h1> */}
            </div>
          </div>
        </div>

        <Banners color="#ffffff" banners={bannersServices} />
        {/* <TitleAndDescription color="#ffffff" padding="padding-bottom" descriptionText={intl.formatMessage({ id: "homepage.services.description2" })} /> */}
        
        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} formTitle={intl.formatMessage({ id: "city-page.contact-us.form-title" })} formDescription={intl.formatMessage({ id: "city-page.contact-us.form-description" })}openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    )
  }
}

export default withMyHook(CityTemplate);

export const pageQuery = graphql`
  query CityQuery(
    $slug: String
    $serviceSlug: String
    $serviceSlugOrder: Int
    $language: String
  ) {
    contentfulCityServices(slug: { eq: $slug }, node_locale: { eq: $language }) {
      cityName
      slug
      country
      location {
        lat
        lon
      }
    }
    contentfulServices(slug: { eq: $serviceSlug }, node_locale: { eq: $language }) {
      serviceName
      slug
      id
    }
    allContentfulServices(filter: { order: { eq: $serviceSlugOrder }, node_locale: { ne: $language } }) {
      nodes {
        slug
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
  }
`
