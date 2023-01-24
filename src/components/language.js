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
            <a key={language} className='language' onClick={() => changeLocale(language)}
              style={{
                backgroundColor: currentLocale === language ? `#ED7C23` : `transparent`,
                color: currentLocale === language ? `white` : `black`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
  )
}

export default Language
