import React from 'react'
import { useIntl } from "gatsby-plugin-intl"
import CookieConsent, { Cookies } from "react-cookie-consent";
import PopUp from "./popup";
import './cookies.scss';

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class CookiesBanner extends React.Component {
    state = {
        seen: false
    };
    togglePop = () => {
        this.setState({
         seen: !this.state.seen
        });
    };

    render() {
      const { children } = this.props
      const intl = this.props.intlValue;
  
      return (
        <CookieConsent 
        enableDeclineButton
        disableStyles={true}
        location="bottom"
        containerClasses="cookies-banner_container"
        contentClasses="cookies-banner_text"
        buttonWrapperClasses="cookies-banner_buttons"
        declineButtonClasses="decline-button"
        buttonClasses="confirm-button"
        buttonText={intl.formatMessage({ id: "cookies.button-accept" })}
        declineButtonText={intl.formatMessage({ id: "cookies.button-decline" })}
        cookieName="gatsby-gdpr-google-analytics"
        expires={150}
        >
        <span className='cookies-banner_info'>{intl.formatMessage({ id: "cookies.title" })}</span>
        <button className='cookies-banner_info-button' onClick={this.togglePop}>{intl.formatMessage({ id: "cookies.button-readMore" })}</button>
        {this.state.seen ? <div className='popup_container'><div className='popup'><PopUp toggle={this.togglePop} /></div></div> : null}
        </CookieConsent>
      )
    }
}

export default withMyHook(CookiesBanner);
