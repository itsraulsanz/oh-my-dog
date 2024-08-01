import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby';
import get from 'lodash/get';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TextBanner from '../components/text-banner/text-banner';
import TitleAndDescription from '../components/title-and-description/title-and-description';
import Contact from '../components/contact/contact';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class tripsPage extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const pdfCalendar = get(this, 'props.data.allContentfulCalendar.nodes[0].pdfFile.file.url');
    const currentYear = new Date().getFullYear();

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "trips.meta-title" })} description={intl.formatMessage({ id: "trips.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription headingText={intl.formatMessage({ id: "trips.title" })} color="#ffffff" padding="padding-top" />
        <TextBanner id="trips" color="orange" pdfCalendar={pdfCalendar} descriptionText1={intl.formatMessage({ id: "trips.description1" })} buttonText={intl.formatMessage({ id: "trips.button-text" })} />
        <TitleAndDescription descriptionText={intl.formatMessage({ id: "trips.description3" })}  padding="padding-bottom" />
        {/* <TitleAndDescription descriptionText={intl.formatMessage({ id: "trips.description4" })}  padding="padding-bottom" /> */}
        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    );
  }
}


export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulCalendar(filter: { node_locale: { eq: $language } }) {
      nodes {
        pdfFile {
          file {
            url
          }
        }
      }
    }
  }
`

export default withMyHook(tripsPage);
