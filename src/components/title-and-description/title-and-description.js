import React, { useState, useRef } from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import './title-and-description.scss';

export default function ImageAndTextBlock(props) {
  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      "embedded-asset-block": node => {
        const { gatsbyImageData } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return <GatsbyImage image={gatsbyImageData} />
      },
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <a
        href={data.uri}
      >{children}</a>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const gatsbyImageData = node.data.target.gatsbyImageData;
        const postGatsbyImageDescription = node.data.target.title;

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
  };

  return (
    <div className={`title-and-description ${ props.padding ? `${props.padding}` : '' } ${ props.align ? `${props.align}` : '' }`} style={{ background: props.color }}>
      <div className={`container-fluid ${ props.border }`}> 
        {props.image &&
          <div className={`image ${ props.imgFormat ? `${props.imgFormat}` : '' }`} >
            <GatsbyImage image={props.image.gatsbyImageData} />
          </div>
        }
          <div className='title-and-description__text'>
            {props.headingText && 
              <h1 className='title-and-description__text-heading'>{props.headingText}</h1>
            }

            {props.subheadingText && 
              <h2 className='title-and-description__text-heading'>{props.subheadingText}</h2>
            }

            {props.descriptionText && 
              <p className='title-and-description__text-description'>{props.descriptionText}</p>
            }

            {props.descriptionText2 && 
              <p className='title-and-description__text-description'>{props.descriptionText2}</p>
            }
          </div>
      </div>
    </div>
  )
}
