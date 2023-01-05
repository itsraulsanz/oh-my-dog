import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Tags from '../tags'
import './article-preview.scss'

function ArticlePosts ({ posts , headingText, descriptionText }) {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

return (
  <div className='article-preview' id='blog'>
    <div className='container-fluid'>
      <div className='article-preview__heading'>
      <h2 className='article-preview__heading-title'>{headingText}</h2>
      <p className='article-preview__heading-description'>{descriptionText}</p>
    </div>
      <ul className='article-list'>
        {posts.map((post) => {
          return (
            <li key={post.path} className='article'>
              <Link to={`/blog/${post.path}`} className='link'>
                <GatsbyImage alt={post.title} image={post.heroImage.gatsbyImage} />
                <div className='article-description'>
                  <h2 className='title'>{post.title}</h2>
                  <p>{post.description?.raw && renderRichText(post.description)}</p>
                  <p>{post.publishDate}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)
}

export default ArticlePosts