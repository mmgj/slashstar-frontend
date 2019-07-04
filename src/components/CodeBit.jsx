import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Heading from './Heading';
import BlockContent from './BlockContent';

const Tags = styled.div`
  display: block;
  .tag {
    font-size: 1.4rem;
    display: inline;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
`;

const LangLabel = styled.h4`
  color: ${p => p.theme.colors.lightgray};
  font-family: ${p => p.theme.fonts.headings};
  font-weight: 100;
  font-size: 1.8rem;
  margin-left: 2.8rem;
  /* margin-top: -0.4rem; */
  margin-top: 3.6rem;
`;

const BitWrap = styled.div`
  .content {
    height: auto;
    display: flex;
    @media (max-width: ${p => p.theme.media.medium}px) {
      flex-direction: column;
    }
  }
  .meta {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: right;
    color: ${p => p.theme.colors.white};
    border-right: 1px solid #f92572;
    padding-right: 2.4rem;
    padding-bottom: 2.4rem;
    .blurb {
      margin-top: -1.8rem;
    }
    small {
      color: #aaa;
    }
  }
  .syntax {
    flex-grow: 1;
    min-width: 60%;
    @media (max-width: ${p => p.theme.media.medium}px) {
      width: 100vw;
      /* overflow-x: scroll; */
      font-size: 0.6em;
    }
  }
`;

const CodeBit = ({ bit }) => {
  const { title, _rawBlurb: blurb, _rawCode: code, tags } = bit;
  return (
    <BitWrap>
      <div className="content">
        <div className="meta">
          <Heading h={3} style={{ fontSize: 32 }}>
            {title}
          </Heading>
          {blurb && (
            <div className="blurb">
              <BlockContent blocks={blurb} />
            </div>
          )}
          {tags && tags.length > 0 && (
            <Tags>
              {tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </Tags>
          )}
        </div>
        <div className="syntax">
          <LangLabel>Language: {code.language}</LangLabel>
          <BlockContent blocks={code} />
        </div>
      </div>
    </BitWrap>
  );
};

CodeBit.propTypes = {
  bit: PropTypes.shape({
    title: PropTypes.string,
    _rawBlurb: PropTypes.array,
    _rawCode: PropTypes.obbject,
    tags: PropTypes.array,
  }).isRequired,
};

export default CodeBit;
