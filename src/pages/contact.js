import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Contact from "../components/contact/contact";

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class contactPage extends React.Component {
  render() {
    const intl = this.props.intlValue;

    return (
      <Layout>
        <Seo title="Contact Page" />
        <Contact
          headingText={intl.formatMessage({ id: "contact-us.title" })}
          descriptionText={intl.formatMessage({ id: "contact-us.description" })}
          openDays={intl.formatMessage({ id: "contact-us.open-days" })}
          openHours={intl.formatMessage({ id: "contact-us.open-hours" })}
          openDaysFriday={intl.formatMessage({
            id: "contact-us.open-days-friday",
          })}
          openHoursFriday={intl.formatMessage({
            id: "contact-us.open-hours-friday",
          })}
          closedDays={intl.formatMessage({ id: "contact-us.closed-days" })}
          closedText={intl.formatMessage({ id: "contact-us.closed-text" })}
          callText={intl.formatMessage({ id: "contact-us.call-text" })}
          telephone={intl.formatMessage({ id: "contact-us.phone" })}
          emailText={intl.formatMessage({ id: "contact-us.email-text" })}
          email={intl.formatMessage({ id: "contact-us.email" })}
          companyName={intl.formatMessage({ id: "contact-us.companyName" })}
          address={intl.formatMessage({ id: "contact-us.address" })}
          location={intl.formatMessage({ id: "contact-us.location" })}
          locationLinkText={intl.formatMessage({
            id: "contact-us.locationLinkText",
          })}
          locationLink={intl.formatMessage({ id: "contact-us.locationLink" })}
          formTitle={intl.formatMessage({ id: "contact-us.form-title" })}
          formDescription={intl.formatMessage({ id: "contact-us.form-description" })}

          formNameText={intl.formatMessage({ id: "contact-us.user-name" })}
          formEmailText={intl.formatMessage({ id: "contact-us.user-email" })}
          formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })}
          formPickupCityText={intl.formatMessage({
            id: "contact-us.user-pickup-city",
          })}
          formDropoffCityText={intl.formatMessage({
            id: "contact-us.user-dropoff-city",
          })}
          formPetnumberText={intl.formatMessage({
            id: "contact-us.user-pet-number",
          })}
          formPetinfoText={intl.formatMessage({
            id: "contact-us.user-pet-info",
          })}
          formMessageText={intl.formatMessage({
            id: "contact-us.user-message",
          })}
          buttonText={intl.formatMessage({ id: "contact-us.btn-text" })}
        />
      </Layout>
    );
  }
}

export default withMyHook(contactPage);
