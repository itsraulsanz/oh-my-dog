import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  es: "ES",
}

const Language = () => {
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

export default Language
