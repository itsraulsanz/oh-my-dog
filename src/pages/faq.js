import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby';
import get from 'lodash/get';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TitleAndDescription from '../components/title-and-description/title-and-description';
import Faq from '../components/faq/faq';
import Contact from '../components/contact/contact';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class petPassport extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const faqsPetDocuments = get(this, 'props.data.faqsPetDocuments.nodes');
    const faqsPreparePet = get(this, 'props.data.faqsPreparePet.nodes');
    const faqsPetLuggage = get(this, 'props.data.faqsPetLuggage.nodes');
    const faqsPetBehavior = get(this, 'props.data.faqsPetBehavior.nodes');
    const faqsDogsAndBarking = get(this, 'props.data.faqsDogsAndBarking.nodes');

    const faqsTypesOfTrips = get(this, 'props.data.faqsTypesOfTrips.nodes');

    
    const faqsQuotationAndPayment = get(this, 'props.data.faqsQuotationAndPayment.nodes');
    const faqsNonCommercialVsCommercialMovement = get(this, 'props.data.faqsNonCommercialVsCommercialMovement.nodes');
    const faqsDocumentsAndRequirements = get(this, 'props.data.faqsDocumentsAndRequirements.nodes');
    const faqsTravelDuration = get(this, 'props.data.faqsTravelDuration.nodes');
    const faqsPricing = get(this, 'props.data.faqsPricing.nodes');
    const faqsSchedules = get(this, 'props.data.faqsSchedules.nodes');
    const faqsAreas = get(this, 'props.data.faqsAreas.nodes');

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "faq.meta-title" })} description={intl.formatMessage({ id: "faq.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription headingText={intl.formatMessage({ id: "faq.title" })} color="#ffffff" padding="padding-top" />

        <Faq color="#fffaf5" padding="padding" faqs={faqsDogsAndBarking} />
        <Faq color="#ffffff" padding="padding" faqs={faqsPetBehavior} />
        <Faq color="#fffaf5" padding="padding" faqs={faqsPetLuggage} />
        <Faq color="#ffffff" padding="padding" faqs={faqsPreparePet} />
        <Faq color="#fffaf5" padding="padding" faqs={faqsPetDocuments} />
        <Faq color="#ffffff" padding="padding" faqs={faqsAreas} />
        <Faq color="#fffaf5" padding="padding" faqs={faqsSchedules} />
        <Faq color="#ffffff" padding="padding" faqs={faqsTypesOfTrips} />
        <Faq color="#fffaf5" padding="padding" faqs={faqsPricing} />
        <Faq color="#ffffff" padding="padding" faqs={faqsTravelDuration} />
        <Faq color="#fffaf5" padding="padding" faqs={faqsDocumentsAndRequirements} />
        <Faq color="#ffffff" padding="padding" faqs={faqsNonCommercialVsCommercialMovement} />
        <Faq color="#fffaf5" padding="padding" faqs={faqsQuotationAndPayment} />

        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    faqsPetDocuments: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "pet-documents"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsPreparePet: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "how-to-prepare-your-pet"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsPetLuggage: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "pet-luggage"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsPetBehavior: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "pet-behavior"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsDogsAndBarking: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "dogs-and-barking"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsAreas: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "areas"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsSchedules: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "schedules"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsTypesOfTrips: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "types-of-trips"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsPricing: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "pricing"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsTravelDuration: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "travel-duration"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsDocumentsAndRequirements: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "documents-and-requirements"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsNonCommercialVsCommercialMovement: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "non-commercial-vs-commercial-movement"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
    faqsQuotationAndPayment: allContentfulFaq(filter: { node_locale: { eq: $language }, topic: {eq: "quotation-and-payment"}}) {
      nodes {
        topic
        topicTitle
        question
        answer {
          raw
        }
      }
    }
  }
`

export default withMyHook(petPassport);
