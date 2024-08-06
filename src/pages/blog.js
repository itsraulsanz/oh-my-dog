import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { useIntl } from "gatsby-plugin-intl";
import Seo from "../components/seo";

import '../styles/_layout.scss';

import Layout from '../components/layout';
import BlogList from '../components/blog-list/blog-list';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class blogPage extends React.Component {
  render() {
    const postsData = get(this, 'props.data.allContentfulBlog.nodes');
    const galleryImagesData = get(this, 'props.data.allContentfulGalleryImage.nodes');
    const pdfCalendar = get(this, 'props.data.allContentfulCalendar.nodes[0].pdfFile.file.url');
    const intl = this.props.intlValue;
    const currentYear = new Date().getFullYear();
    const reviewsData = get(this, 'props.data.reviews');
    const reviews = intl.locale === 'en' ? reviewsData.reviewsEn : reviewsData.reviewsEs;

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "blog.meta-title" })} description={intl.formatMessage({ id: "blog.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <BlogList posts={postsData} headingText={intl.formatMessage({ id: "blog.title" })} descriptionText={intl.formatMessage({ id: "blog.description" })} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query HomeQuery($language: String) {
    allContentfulBlog(sort: { fields: orderId, order: ASC } filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        path
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
        buttonText
      }
    }
    allContentfulGalleryImage(sort: { fields: order, order: ASC } filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        order
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
    allContentfulCalendar(filter: { node_locale: { eq: $language } }) {
      nodes {
        pdfFile {
          file {
            url
          }
        }
      }
    }
    reviews {
      rating
      userRating
      reviewsEn {
        author_name
        profile_photo_url
        rating
        relative_time_description
        text
        time
      }
      reviewsEs {
        author_name
        profile_photo_url
        rating
        relative_time_description
        text
        time
      }
    }
  }
`
export default withMyHook(blogPage);
