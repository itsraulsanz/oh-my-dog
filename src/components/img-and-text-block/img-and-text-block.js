import React, { useState, useRef } from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import './img-and-text-block.scss';

export default function ImgAndTextBlock(props) {
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
    <div className={`img-and-text ${ props.padding ? `${props.padding}` : '' } ${ props.align ? `${props.align}` : '' }`} style={{ background: props.color }}>
      <div className={`container-fluid ${ props.border }`}>
        <div className="blocks">
          {props.blocks.map((block, index) => (
            <div className='block' key={index}>
              {block.image &&
                <div className={`image ${ block.imgFormat ? `${block.imgFormat}` : '' }`} >
                  <GatsbyImage alt={block.title} image={block.image.gatsbyImage} key={index} />
                </div>
              }
              
              <div className='img-and-text__text'>
                {block.title && 
                  <h3 className='img-and-text__text-heading'>{block.title}</h3>
                }

                {block.textContent && 
                  <p className='img-and-text__text-description'>{block.textContent.raw && renderRichText(block.textContent, renderOptions)}</p>
                }

                {block.descriptionText2 && 
                  <p className='img-and-text__text-description'>{block.descriptionText2}</p>
                }   
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
