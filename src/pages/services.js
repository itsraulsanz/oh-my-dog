import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby'
import get from 'lodash/get';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Banners from '../components/banners/banners';
import TitleAndDescription from '../components/title-and-description/title-and-description';
import Contact from '../components/contact/contact'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class servicesPage extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const bannersData = get(this, 'props.data.allContentfulBanner.nodes');
    console.log('bannersData', bannersData);

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "services.meta-title" })} description={intl.formatMessage({ id: "services.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription headingText={intl.formatMessage({ id: "services.title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.description1" })} />
        <TitleAndDescription color="#ffffff" padding="padding-bottom" descriptionText={intl.formatMessage({ id: "services.description2" })} />
        <Banners color="#FCEEDD" banners={bannersData} />

        <TitleAndDescription subheadingText={intl.formatMessage({ id: "services.section1-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.section1-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "services.section2-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.section2-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "services.section3-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.section3-description1" })} descriptionText2={intl.formatMessage({ id: "services.section3-description2" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "services.section4-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.section4-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "services.section5-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.section5-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "services.section6-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "services.section6-description1" })} descriptionText2={intl.formatMessage({ id: "services.section6-description2" })} />

        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />    
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulBanner(sort: { fields: orderId, order: ASC } filter: { section: {eq: "services"}, node_locale: { eq: $language } }) {
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
            height: 800
          )
        }
      }
    }
  }
`

export default withMyHook(servicesPage);
