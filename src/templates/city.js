import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { useIntl } from "gatsby-plugin-intl"

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
    const city = get(this.props, 'data.contentfulCity')
    const intl = this.props.intlValue;

    console.log('cityTEST', city);

    let pathname = typeof window !== "undefined" ? window.location.pathname : "";
    const locationLanguage = pathname.split("/")[1];

    return (
      <Layout location={this.props.location}>
        <div className="blog-post container-fluid">
          <div className="blog-post__details">
            <h1 className="blog-post__details-title">{city.city}</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withMyHook(CityTemplate);

export const pageQuery = graphql`
  query CityQuery {
    contentfulCity(cities_list: {cities: {elemMatch: {city: {eq: "ES-Alabama"}}}}) {
      cities_list {
        cities {
          city
        }
      }
    }
  }
`
