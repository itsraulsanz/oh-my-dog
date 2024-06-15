import React from 'react';
import { useIntl } from "gatsby-plugin-intl";

import get from 'lodash/get';
import "../styles/_layout.scss";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TextBanner from '../components/text-banner/text-banner';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  };
}

class contactPage extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const pdfCalendar = get(this, 'props.data.allContentfulCalendar.nodes[0].pdfFile.file.url')
    const currentYear = new Date().getFullYear();

    return (
      <Layout>
        <Seo title={intl.formatMessage({ id: "contact-us.meta-title" })} description={intl.formatMessage({ id: "contact-us.meta-description" })} siteLocale={intl.formatMessage({ id: "general.locale" })} />
        <TextBanner id="trips" color="orange" pdfCalendar={pdfCalendar} headingText={intl.formatMessage({ id: "our-trips-banner.title" })} descriptionText1={intl.formatMessage({ id: "our-trips-banner.description1" })} descriptionText2={intl.formatMessage({ id: "our-trips-banner.description2" })} buttonText={intl.formatMessage({ id: "our-trips-banner.button-text" })} year={currentYear} />
      </Layout>
    );
  }
}

export default withMyHook(contactPage);
