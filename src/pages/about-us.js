import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby'
import get from 'lodash/get';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TitleAndDescription from '../components/title-and-description/title-and-description';
import TextBlock2Columns from '../components/text-block-2columns/text-block-2columns'
import Contact from '../components/contact/contact'
import LogoDefra from '../images/logo-defra.webp'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class aboutUs extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const bannersData = get(this, 'props.data.allContentfulBanner.nodes');
    console.log('bannersData', bannersData);

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "about-us.meta-title" })} description={intl.formatMessage({ id: "about-us.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription headingText={intl.formatMessage({ id: "about-us.title" })} color="#ffffff" padding="padding-top" />
        <TextBlock2Columns color="#ffffff" padding="padding-bottom" bodyText1={intl.formatMessage({ id: "about-us.description1" })} bodyText2={intl.formatMessage({ id: "about-us.description2" })} bodyText3={intl.formatMessage({ id: "about-us.description3" })} bodyText4={intl.formatMessage({ id: "about-us.description4" })} image={LogoDefra} />
        
        <TitleAndDescription color="#ffffff" padding="padding-bottom" descriptionText={intl.formatMessage({ id: "about-us.description2" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "about-us.section1-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "about-us.section1-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "about-us.section2-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "about-us.section2-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "about-us.section3-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "about-us.section3-description1" })} descriptionText2={intl.formatMessage({ id: "about-us.section3-description2" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "about-us.section4-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "about-us.section4-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "about-us.section5-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "about-us.section5-description" })} />
        <TitleAndDescription subheadingText={intl.formatMessage({ id: "about-us.section6-title" })} color="#ffffff" padding="padding-top" descriptionText={intl.formatMessage({ id: "about-us.section6-description1" })} descriptionText2={intl.formatMessage({ id: "services.section6-description2" })} />

        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />    
      </Layout>
    );
  }
}

export default withMyHook(aboutUs);
