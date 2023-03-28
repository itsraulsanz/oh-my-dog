import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { GatsbyImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'
import { useIntl } from "gatsby-plugin-intl"
import './blog-post.scss'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Tags from '../components/tags'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const intlValue = useIntl();
    return <Component {...props} intlValue={intlValue} />;
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const intl = this.props.intlValue;
    const post = get(this.props, 'data.contentfulBlog')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = documentToPlainTextString(JSON.parse(post.description.raw))
    const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)

    const renderOptions = {
      renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      },
      renderNode: {
        [INLINES.HYPERLINK]: (node) => {
          if((node.data.uri).includes("player.vimeo.com/video")){
            return <div className='video'><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe></div>
          } else if((node.data.uri).includes("youtube.com/embed")) {
            return <div className='video'><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></div>
          }
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          return <h2>{children}</h2>
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const gatsbyImageData = node.data.target.gatsbyImageData
          const postGatsbyImageDescription = node.data.target.title

          if (node.data.target.gatsbyImageData) {
            return (
              <GatsbyImage
              image={gatsbyImageData}
              alt={postGatsbyImageDescription}
            />
            );
          }

          if (node.data.target.gatsbyImageData === null) {
            return (
              <video src={node.data.target.file.url} title={node.data.target.title} className='article-body-video' width="100%" controls />
            );
          }        
        },
      },
    }

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.heroImage.resize.src}`}
        />
        {/* <Hero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          content={post.description}
        /> */}
        <div className="blog-post container-fluid">
          <GatsbyImage
            image={post.heroImage?.gatsbyImage}
            title={post.title}
            content={post.description}
          />
          <div className="blog-post__details">
            <h1 className="blog-post__details-title">{post.title}</h1>
            <div className="blog-post__details-content">
              {post.content?.raw && renderRichText(post.content, renderOptions)}
            </div>
          </div>
          <span className="blog-post__meta">
            <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
            {timeToRead} {intl.formatMessage({ id: "blog.time" })}
          </span>
          <div className="blog-post__article">
            <div className="blog-post__article-body">
              {post.body?.raw && renderRichText(post.body, renderOptions)}
            </div>
            {/* <Tags tags={post.tags} /> */}
          </div>
          <div className='blog-post__blogNavigation'>
            
          {/* {(previous || next) && (
              <nav>
                <ul className="blog-post__articleNavigation">
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.path}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.path}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )} */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withMyHook(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostQuery(
    $slug: String
    $language: String
    $previousPostPath: String
    $nextPostPath: String
  ) {
    contentfulBlog(path: { eq: $slug }, node_locale: { eq: $language }) {
      path
      title
      publishDate(formatString: "D/MM/YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
      }
      description {
        raw
      }
    }
    previous: contentfulBlog(path: { eq: $previousPostPath }) {
      path
      title
    }
    next: contentfulBlog(path: { eq: $nextPostPath }) {
      path
      title
    }
  }
`
