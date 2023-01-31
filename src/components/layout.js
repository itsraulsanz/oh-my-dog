import React from 'react'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { useIntl } from "gatsby-plugin-intl"

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class Template extends React.Component {
  render() {
    const { children } = this.props
    const intl = this.props.intlValue;

    return (
      <>
        <Seo />
        <Navigation 
          location={this.props.location} 
          whyUs={intl.formatMessage({ id: "general.why-us" })}
          services={intl.formatMessage({ id: "general.services" })}
          aboutUs={intl.formatMessage({ id: "general.about-us" })}
          gallery={intl.formatMessage({ id: "general.gallery" })}
          testimonials={intl.formatMessage({ id: "general.testimonials" })}
          info={intl.formatMessage({ id: "general.info" })}
          blog={intl.formatMessage({ id: "general.blog" })}
          petPassport={intl.formatMessage({ id: "general.pet-passport" })}
          calendar={intl.formatMessage({ id: "general.calendar" })}
          contactUs={intl.formatMessage({ id: "general.contact-us" })}
        />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default withMyHook(Template);
