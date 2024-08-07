import React, { useState, useRef } from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import './faq.scss';

export default function FaqBlock(props) {
  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <a
        href={data.uri}
      >{children}</a>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  };

  return (
    <div className={`faq-block ${ props.padding ? `${props.padding}` : '' } ${ props.align ? `${props.align}` : '' }`} style={{ background: props.color }}>
      <div className={`container-fluid ${ props.border }`}>
        {props.faqs[0].topicTitle && 
          <h2 className='faq__text-heading'>{props.faqs[0].topicTitle}</h2>
        }
        {props.faqs.map((faq, index) => (
          <div className='faq' key={index}>
            <details className='faq-details'>
              <summary>
                {faq.question && 
                  <h3 className='faq__text-heading'>{faq.question}</h3>
                }                  
              </summary>

              {faq.answer && 
                <p className='faq__text-description'>{faq.answer.raw && renderRichText(faq.answer, renderOptions)}</p>
              }              
            </details>
          </div>
        ))}
      </div>
    </div>
  )
}
