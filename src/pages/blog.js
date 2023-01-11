import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import '../styles/_layout.scss';

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import ArticlePreview from '../components/article-preview/article-preview'
import '../components/article-preview/article-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlog.nodes')

    return (
      <Layout>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlog {
      nodes {
        title
        path
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`
