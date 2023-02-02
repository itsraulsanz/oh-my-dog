import React from 'react'
import Seo from '../components/seo';
import Layout from '../components/layout';
import TextBanner from "../components/text-banner/text-banner"
import { useIntl } from "gatsby-plugin-intl"

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class Error extends React.Component {
  render() {
    const intl = this.props.intlValue;

    return (
      <Layout location={this.props.location}>
        <Seo title="Page not found" />
            <TextBanner color="orange" headingText={intl.formatMessage({ id: "error.title" })} descriptionText1={intl.formatMessage({ id: "error.description1" })} descriptionText2={intl.formatMessage({ id: "error.description2" })} buttonText={intl.formatMessage({ id: "error.button-text" })} />
      </Layout>
    )
  }
}

export default withMyHook(Error);
