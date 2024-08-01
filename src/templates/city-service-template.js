import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { useIntl } from "gatsby-plugin-intl";
import './city-service-template.scss';

import Seo from '../components/seo';
import Layout from '../components/layout';

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
    const serviceSlug = get(this.props, 'data.allContentfulServices.nodes[0].slug');

    const title2 = intl.formatMessage({ id: 'cities.' + serviceSlug + '.title2' });
    if (!title2) {
      return null;
    }

    const title = intl.formatMessage({ id: 'cities.' + serviceSlug + '.meta-title1' });
    const metaTitle = intl.formatMessage({ id: 'cities.' + serviceSlug + '.meta-title1' }) + city.cityName + intl.formatMessage({ id: 'cities.' + serviceSlug + '.meta-title2' });
    const metaDescription = intl.formatMessage({ id: 'cities.' + serviceSlug + '.meta-description1' }) + city.cityName + intl.formatMessage({ id: 'cities.' + serviceSlug + '.meta-description2' });

    const bannersServices = get(this, 'props.data.banners_services.nodes');

    return (
      <Layout location={this.props.location}>
        <Seo
          title={metaTitle} 
          description={metaDescription}
        />
        <div className="city-service-template">
          <div className="container-fluid">
            <div className="city-service-template__details">
              {/* <span style={{fontStyle: 'italic'}}>
                <h3 className="city-service-template__details-title">metaTitle: {metaTitle}</h3>
                <h3 className="city-service-template__details-title">metaDescription: {metaDescription}</h3>
              </span> */}
              <h1 className="city-service-template__details-title">{title} {city.cityName}{title2}</h1>
            </div>
          </div>
        </div>

        <TitleAndDescription color="#ffffff" descriptionText={metaDescription} />

        <TitleAndDescription color="#ffffff" padding="padding-top" border="border-top" subheadingText={intl.formatMessage({ id: "homepage.services.title" }) + ' ' + intl.formatMessage({ id: "cities.title-connector" }) + ' ' + city.cityName} descriptionText={intl.formatMessage({ id: "homepage.services.description1" })} />
        <Banners color="#ffffff" padding="padding-bottom" banners={bannersServices} />
        
        <Contact subheadingText={intl.formatMessage({ id: "cities.contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    )
  }
}

export default withMyHook(CityTemplate);

export const pageQuery = graphql`
  query CityQuery(
    $slug: String
    $serviceSlug: String
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
    allContentfulServices(filter: {slug: {eq: $serviceSlug}, node_locale: { eq: $language } }) {
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
