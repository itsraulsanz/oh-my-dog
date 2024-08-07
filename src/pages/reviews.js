import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { graphql } from 'gatsby';
import get from 'lodash/get';
import '../styles/_layout.scss';
import Seo from "../components/seo";

import Layout from '../components/layout';
import TitleAndDescription from '../components/title-and-description/title-and-description';
import Reviews from '../components/reviews/reviews';
import Contact from '../components/contact/contact';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class ReviewsPage extends React.Component {
  render() {
    const intl = this.props.intlValue;

    const reviewsData = get(this, 'props.data.reviews');
    const reviews = intl.locale === 'en' ? reviewsData.reviewsEn : reviewsData.reviewsEs;

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "reviews.meta-title" })} description={intl.formatMessage({ id: "reviews.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <Reviews color="#ffffff" padding="padding" headingText={intl.formatMessage({ id: "reviews.title" })} descriptionText={intl.formatMessage({ id: "reviews.description" })} reviews={reviews} rating={reviewsData.rating} userRating={reviewsData.userRating} reviewsText={intl.formatMessage({ id: "reviews.reviewsText" })} />
        <Contact color="#FCEEDD" subheadingText={intl.formatMessage({ id: "contact-us.title" })} descriptionText={intl.formatMessage({ id: "contact-us.description" })} openDays={intl.formatMessage({ id: "contact-us.open-days" })} openHours={intl.formatMessage({ id: "contact-us.open-hours" })} openDaysFriday={intl.formatMessage({ id: "contact-us.open-days-friday" })} openHoursFriday={intl.formatMessage({ id: "contact-us.open-hours-friday" })} closedDays={intl.formatMessage({ id: "contact-us.closed-days" })} closedText={intl.formatMessage({ id: "contact-us.closed-text" })} callText={intl.formatMessage({ id: "contact-us.call-text" })} telephone={intl.formatMessage({ id: "contact-us.phone" })} emailText={intl.formatMessage({ id: "contact-us.email-text" })} email={intl.formatMessage({ id: "contact-us.email" })} companyName={intl.formatMessage({ id: "contact-us.companyName" })} address={intl.formatMessage({ id: "contact-us.address" })} location={intl.formatMessage({ id: "contact-us.location" })} locationLinkText={intl.formatMessage({ id: "contact-us.locationLinkText" })} locationLink={intl.formatMessage({ id: "contact-us.locationLink" })} formNameText={intl.formatMessage({ id: "contact-us.user-name" })} formEmailText={intl.formatMessage({ id: "contact-us.user-email" })} formPhoneText={intl.formatMessage({ id: "contact-us.user-phone" })} formPickupCityText={intl.formatMessage({ id: "contact-us.user-pickup-city" })} formDropoffCityText={intl.formatMessage({ id: "contact-us.user-dropoff-city" })} formPetnumberText={intl.formatMessage({ id: "contact-us.user-pet-number" })} formPetinfoText={intl.formatMessage({ id: "contact-us.user-pet-info" })} formMessageText={intl.formatMessage({ id: "contact-us.user-message" })} buttonText={intl.formatMessage({ id: "contact-us.btn-text" })} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query HomeQuery {
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
export default withMyHook(ReviewsPage);
