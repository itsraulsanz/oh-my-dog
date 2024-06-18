import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import './blog-list.scss'

const PaginatedPosts = ({posts, headingText, subheadingText, descriptionText, link}) => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchBlogPosts = async () => {
       setBlogPosts(posts);
    };
    fetchBlogPosts();
  }, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const locationLanguage = pathname.split("/")[1];

  return (
    <div className='article-preview' id='blog'>
      <div className='container-fluid'>
        {headingText || subheadingText || descriptionText ? 
          <div className='article-preview__heading'>
            {headingText && 
              <h1 className='article-preview__heading-title'>{headingText}</h1>
            }
      
            {subheadingText &&
              <h2 className='article-preview__heading-title'>{subheadingText}</h2>
            }
                  
            {descriptionText &&
              <p className='article-preview__heading-description'>{descriptionText}</p>
            }
          </div>
        : null}

        {blogPosts ? (
          <div>
          <ul className='article-list'>
            {currentPosts.map((currentPost) => (
                <li key={currentPost.path} className='article'>
                  <Link to={`/blog/${currentPost.path}`} className='link'>
                    <GatsbyImage alt={currentPost.title} image={currentPost.heroImage.gatsbyImage} />
                    <div className='article-description'>
                      <h2 className='title'>{currentPost.title}</h2>
                      <p>{currentPost.description?.raw && renderRichText(currentPost.description)}</p>
                      <p>{currentPost.publishDate}</p>
                      <a href={`/blog/${currentPost.path}`}>{currentPost.buttonText}</a>
                    </div>
                  </Link>
                </li>
            ))}
          </ul>
          {/* <ReactPaginate
              onPageChange={paginate}
              pageCount={Math.ceil(blogPosts.length / postsPerPage)}
              previousLabel={'<'}
              nextLabel={'>'}
              containerClassName={'pagination'}
              pageLinkClassName={'page-number'}
              previousLinkClassName={'page-prev'}
              nextLinkClassName={'page-next'}
              activeLinkClassName={'active'}
          /> */}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}

        {link ? 
          <Link to={`/${locationLanguage}/blog`} className='button-secondary'>
            {link}
          </Link>
        : null }
      </div>
    </div>
  )
}

export default PaginatedPosts
