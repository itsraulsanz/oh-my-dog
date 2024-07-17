import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby'
import get from 'lodash/get';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TextBanner from '../components/text-banner/text-banner';
import TitleAndDescription from '../components/title-and-description/title-and-description';
import Contact from '../components/contact/contact'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class internationalTransport extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const heroImage = get(this, 'props.data.allContentfulTextContent.nodes[0].image');
    const titleText = get(this, 'props.data.allContentfulTextContent.nodes[0].title');
    const descriptionText = get(this, 'props.data.allContentfulTextContent.nodes[0].textContent');

    console.log('heroImage:', heroImage);
    console.log('titleText:', titleText);
    console.log('descriptionText:', descriptionText);

    const renderOptions = {
      renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      },
      renderNode: {
        "embedded-asset-block": node => {
          const { gatsbyImageData } = node.data.target
          if (!gatsbyImageData) {
            // asset is not an image
            return null
          }
          return <GatsbyImage image={gatsbyImageData} />
        },
        [INLINES.HYPERLINK]: ({ data }, children) => (
          <a
          href={data.uri}
        >{children}</a>
        ),
        [BLOCKS.HEADING_2]: (node, children) => {
          return <h2>{children}</h2>
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
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
    }

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "services.shared-transport.meta-title" })} description={intl.formatMessage({ id: "services.shared-transport.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription color="#ffffff" padding="padding" align="left" image={heroImage} headingText={titleText} descriptionText={descriptionText.raw && renderRichText(descriptionText, renderOptions)} />
        
        {/* <TitleAndDescription descriptionText={textContent.raw && renderRichText(textContent, renderOptions)} padding="padding-bottom" /> */}
        <Contact subheadingText={intl.formatMessage({ id: "services.contact-us.title" })} descriptionText={intl.formatMessage({ id: "services.contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulTextContent(filter: {websiteSection: {eq: "shared-transport"}, node_locale: { eq: $language } }) {
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
          gatsbyImageData
        }
      }
    }
  }
`

export default withMyHook(internationalTransport);
