import React, { Component } from "react";
import { useIntl } from "gatsby-plugin-intl";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import './popup.scss';

function withMyHook(Component) {
    return function WrappedComponent(props) {
      const intlValue = useIntl();
      return <Component {...props} intlValue={intlValue} />;
    }
}

class PopUp extends React.Component {
  handleClick = () => {
   this.props.toggle();
  };

    render() {
      const { children } = this.props;
      const intl = this.props.intlValue;

  return (
    <CookieConsent
    disableStyles={true}
    location="bottom"
    containerClasses="cookies-banner_container"
    contentClasses="cookies-banner_text"
    declineButtonClasses="decline-button"
    buttonClasses="confirm-button"
    style={{ background: "#FCEEDD", color: "#000000", position: "unset", flexDirection: "column" }}
    buttonText={intl.formatMessage({ id: "cookies.button-accept" })}
    declineButtonText="Decline"
    cookieName="gatsby-gdpr-google-analytics"
    expires={150}
    onAccept={() => {
          document.getElementsByClassName("cookies-banner_container")[0].style.display = 'none';
        }
      }
    >
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;</span>
     <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title1" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph1" })}</p>
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title2" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph2-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph2-2" })}</p>
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title3" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph3" })}</p>
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title4" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph4" })}</p>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li4-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li4-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li4-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li4-4" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li4-5" })}</li>
                </ul>
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title5" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph5" })}</p>
                
                {/* CHROME */}
                <h4>{intl.formatMessage({ id: "cookies.subtitle5-1" })}</h4>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li5-1-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-1-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-1-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-1-4" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-1-5" })}</li>
                </ul>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-1" })} <a href={intl.formatMessage({ id: "cookies.link5-1" })} target="_blank" rel="noreferrer" aria-label={`/${intl.formatMessage({ id: "cookies.subtitle5-1" })} instructions`} >{intl.formatMessage({ id: "cookies.here" })}</a></p>
            
                {/* IE */}
                <h4>{intl.formatMessage({ id: "cookies.subtitle5-2" })}</h4>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li5-2-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-2-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-2-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-2-4" })}</li>
                </ul>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-2" })} <a href={intl.formatMessage({ id: "cookies.link5-2" })} target="_blank" rel="noreferrer" aria-label={`/${intl.formatMessage({ id: "cookies.subtitle5-2" })} instructions`} >{intl.formatMessage({ id: "cookies.here" })}</a></p>

                {/* FIREFOX */}
                <h4>{intl.formatMessage({ id: "cookies.subtitle5-3" })}</h4>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li5-3-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-3-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-3-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-3-4" })}</li>                <li>{intl.formatMessage({ id: "cookies.li5-3-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-3-5" })}</li>                <li>{intl.formatMessage({ id: "cookies.li5-3-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-3-6" })}</li>
                </ul>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-3-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-3-2" })} <a href={intl.formatMessage({ id: "cookies.link5-3" })} target="_blank" rel="noreferrer" aria-label={`/${intl.formatMessage({ id: "cookies.subtitle5-3" })} instructions`} >{intl.formatMessage({ id: "cookies.here" })}</a></p>

                {/* SAFARI */}
                <h4>{intl.formatMessage({ id: "cookies.subtitle5-4" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-4-1" })}</p>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li5-4-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-4-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-4-3" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li5-4-4" })}</li>
                </ul>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-4-2" })} <a href={intl.formatMessage({ id: "cookies.link5-4" })} target="_blank" rel="noreferrer" aria-label={`/${intl.formatMessage({ id: "cookies.subtitle5-4" })} instructions`} >{intl.formatMessage({ id: "cookies.here" })}</a></p>

                {/* OPERA */}
                <h4>{intl.formatMessage({ id: "cookies.subtitle5-5" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-5-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-5-2" })} <a href={intl.formatMessage({ id: "cookies.link5-5" })} target="_blank" rel="noreferrer" aria-label={`/${intl.formatMessage({ id: "cookies.subtitle5-5" })} instructions`} >{intl.formatMessage({ id: "cookies.here" })}</a></p>
              
                {/* OTHER */}
                <h4>{intl.formatMessage({ id: "cookies.subtitle5-6" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph5-6" })}</p>
            
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title6" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-2" })}</p>
                <h4>{intl.formatMessage({ id: "cookies.subtitle6-1" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-1-1" })}</p>
                <h4>{intl.formatMessage({ id: "cookies.subtitle6-2" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-2-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-2-2" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-2-3" })}</p>
                <h4>{intl.formatMessage({ id: "cookies.subtitle6-3" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-3-1" })}</p>
                <h5>{intl.formatMessage({ id: "cookies.subtitle6-3-1" })}</h5>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-3-1-1" })}</p>
                <h5>{intl.formatMessage({ id: "cookies.subtitle6-3-2" })}</h5>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-3-2" })}</p>
                <h5>{intl.formatMessage({ id: "cookies.subtitle6-3-3" })}</h5>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-3-3" })}</p>
                <h4>{intl.formatMessage({ id: "cookies.subtitle6-4" })}</h4>
                <p>{intl.formatMessage({ id: "cookies.paragraph6-4-1" })}</p>
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title7" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-2" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-3" })}</p>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li7-3-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li7-3-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li7-3-3" })}</li>
                </ul>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-4" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-5" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-6" })}</p>
                <ul>
                <li>{intl.formatMessage({ id: "cookies.li7-6-1" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li7-6-2" })}</li>
                <li>{intl.formatMessage({ id: "cookies.li7-6-3" })}</li>
                </ul>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-7" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph7-8" })}</p> 
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title8" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph8-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph8-2" })}</p>
            </div>
            <div className="popup-text">
                <h3>{intl.formatMessage({ id: "cookies.title9" })}</h3>
                <p>{intl.formatMessage({ id: "cookies.paragraph9-1" })}</p>
                <p>{intl.formatMessage({ id: "cookies.paragraph9-2" })}</p>
            </div>
    </div>
   </div>
   <span className="popup-background" onClick={this.handleClick}></span>
   </CookieConsent>
  );
 }
}

export default withMyHook(PopUp);
