import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { useIntl } from "gatsby-plugin-intl"
import './city-template.scss'

import Seo from '../components/seo'
import Layout from '../components/layout'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class CityTemplate extends React.Component {
  render() {
    const city = get(this.props, 'data.contentfulCityServices')
    const intl = this.props.intlValue;

    let pathname = typeof window !== "undefined" ? window.location.pathname : "";
    const locationLanguage = pathname.split("/")[1];

    return (
      <Layout location={this.props.location}>
        <Seo
          title={city.cityName}
          description={city.cityName}
        />
        <div className="city-template container-fluid">
          <div className="city-template__details">
            <h1 className="city-template__details-title">{city.cityName}</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withMyHook(CityTemplate);

export const pageQuery = graphql`
  query CityQuery(
    $slug: String
    $language: String
  ) {
    contentfulCityServices(slug: { eq: $slug }, node_locale: { eq: $language }) {
      cityName
      country
      location {
        lat
        lon
      }
    }
  }
`
