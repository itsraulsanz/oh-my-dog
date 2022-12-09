import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from '../container'
import Tags from '../tags'
import './article-preview.scss'

export default function ArticlePreview({ posts }) {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <div className='article-preview' id='blog'>
      <div className='container-fluid'>
          <div className='article-preview__heading'>
            <h2 className='article-preview__heading-title'>Oh my dog - Blog</h2>
            <p className='article-preview__heading-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
          </div>
        <ul className='article-list'>
          {posts.map((post) => {
            return (
              <li key={post.slug} className='article'>
                <Link to={`/blog/${post.slug}`} className='link'>
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                <div className='article-description'>
                  <h2 className='title'>{post.title}</h2>
                  <p>{post.description?.raw && renderRichText(post.description)}</p>
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
