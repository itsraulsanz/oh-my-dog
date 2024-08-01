import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby';
import get from 'lodash/get';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TextBanner from '../components/text-banner/text-banner';
import TitleAndDescription from '../components/title-and-description/title-and-description';
import Contact from '../components/contact/contact';
import Passport from '../pdf/HowtoCompletePetPassports.pdf';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class petPassport extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const textContent = get(this, 'props.data.allContentfulTextContent.nodes[0]');

    const renderOptions = {
      renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      },
      renderNode: {
        [INLINES.HYPERLINK]: (node) => {
          if((node.data.uri).includes("player.vimeo.com/video")){
            return <div className='video'><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe></div>
          } else if((node.data.uri).includes("youtube.com/embed")) {
            return <div className='video'><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></div>
          }
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          return <h2>{children}</h2>
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const gatsbyImageData = node.data.target.gatsbyImageData
          const postGatsbyImageDescription = node.data.target.title

          if (node.data.target.gatsbyImageData) {
            return (
              <GatsbyImage
              image={gatsbyImageData}
              alt={postGatsbyImageDescription}
            />
            );
          }

          if (node.data.target.gatsbyImageData === null) {
            return (
              <video src={node.data.target.file.url} title={node.data.target.title} className='article-body-video' width="100%" controls />
            );
          }        
        },
      },
    };

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "passport.meta-title" })} description={intl.formatMessage({ id: "passport.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription headingText={intl.formatMessage({ id: "passport.title" })} color="#ffffff" padding="padding-top" />
        <TitleAndDescription subheadingText={textContent.title} descriptionText={textContent.textContent?.raw && renderRichText(textContent.textContent, renderOptions)} />
        <TextBanner id="passport" color="green" pdf={Passport} subheadingText={intl.formatMessage({ id: "passport.subtitle" })} descriptionText1={intl.formatMessage({ id: "passport.description1" })} buttonText={intl.formatMessage({ id: "passport.button-text" })} />
        <Contact subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulTextContent(filter: { node_locale: { eq: $language }, entryTitle: {eq: "how-to-complete-a-passport"} }) {
      nodes {
        title
        textContent {
          raw
        }
      }
    }
  }
`

export default withMyHook(petPassport);
