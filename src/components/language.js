import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "EN",
  es: "ES",
};

const Language = () => {
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";

  if (pathname.includes('/services/') && pathname.length > 13) {
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
