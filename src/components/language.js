import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "EN",
  es: "ES",
};

const Language = () => {
  const path = window.location.pathname;

  if (path.includes('/services/') && path.length > 13) {
    // return (
    //   <IntlContextConsumer>
    //     {({ languages, language: currentLocale }) =>
    //       languages.map(language => (
    //         <button key={language} className={currentLocale === language ? `language active` : `language non-active`} onClick={() => changeLocale(language.url)}>
    //           {languageName[language]}
    //         </button>
    //       ))
    //     }
    //   </IntlContextConsumer>
    // )
  } else {
    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button key={language} className={currentLocale === language ? `language active` : `language non-active`} onClick={() => changeLocale(language)}>
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    )
  }
}

export default Language
