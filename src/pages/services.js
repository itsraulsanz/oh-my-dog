import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby'
import get from 'lodash/get';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import ImgAndText from '../components/img-and-text-block/img-and-text-block';
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
    const blocksServices = get(this, 'props.data.allContentfulTextContent.nodes');

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "services.meta-title" })} description={intl.formatMessage({ id: "services.meta-description" })} />
        <TitleAndDescription color="#ffffff" padding="padding" headingText={intl.formatMessage({ id: "services.title" })} descriptionText={intl.formatMessage({ id: "services.description" })} />
        <ImgAndText color="#ffffff" padding="padding-bottom" blocks={blocksServices} />

        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />    
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulTextContent(filter: { websiteSection: {eq: "services"}, node_locale: { eq: $language } }) {
      nodes {
        title
        textContent {
          raw
        }
        image {
          gatsbyImage(
            layout: FULL_WIDTH
            width: 424
            height: 212
          )
        }
      }
    }
  }
`

export default withMyHook(servicesPage);
