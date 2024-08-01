import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import { graphql } from 'gatsby';
import get from 'lodash/get';
import { GatsbyImage } from 'gatsby-plugin-image';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Gallery from '../components/gallery/gallery';
import TitleAndDescription from '../components/title-and-description/title-and-description';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class gallery extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const galleryImagesData = get(this, 'props.data.allContentfulGalleryImage.nodes');

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "gallery.meta-title" })} description={intl.formatMessage({ id: "gallery.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TitleAndDescription headingText={intl.formatMessage({ id: "gallery.title" })} descriptionText={intl.formatMessage({ id: "gallery.description" })} color="#ffffff" padding="padding-top" />
        <Gallery galleryImages={galleryImagesData} />
      </Layout>
    );
  }
}


export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulGalleryImage(sort: { fields: order, order: ASC } filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        order
        span
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

export default withMyHook(gallery);
