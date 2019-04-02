/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BaseBlockContent from '@sanity/block-content-to-react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { darken } from 'polished';
import BlockFigure from './BlockFigure';
import BlockCode from './BlockCode';
/* TODO: Heading => BlockHeading  */
import Heading from '../Heading';

const ResponsiveWrapper = styled.div`
  background: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  position: relative;
  margin: 5rem auto;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledSection = styled.section`
  margin: 2.5rem 0;
  font-family: ${props => props.theme.fonts.body};
`;

const StyledBase = styled(BaseBlockContent)`
  a, a:visited {
      color: ${props => darken(0.5, props.theme.colors.secondary)};
      text-decoration: none;
      border-bottom: 2px solid ${props => props.theme.colors.secondary};
    }
`;

const serializers = {
  // FIXME: ⬇ Make this work!
  marks: {
    internalLink() {
      return <span>oops</span>;
    },
    abbr({ mark, children }) {
      return <abbr title={mark.title}>{children}</abbr>;
    },
  },
  types: {
    block({ node: { language, style }, children }) {
      switch (style) {
        case 'h1':
          return (
            <Heading inline h={1}>
              {children}
            </Heading>
          );

        case 'h2':
          return (
            <Heading inline h={2}>
              {children}
            </Heading>
          );

        case 'h3':
          return (
            <Heading inline h={3}>
              {children}
            </Heading>
          );

        case 'h4':
          return (
            <Heading inline h={4} style={{ fontStyle: 'italic' }}>
              {children}
            </Heading>
          );

        case 'h5':
          return (
            <Heading
              inline
              h={5}
              style={{
                // fontStyle: 'italic',
                color: 'darkgray',
                fontWeight: 100,
                fontSize: '2.4rem',
              }}
            >
              {children}
            </Heading>
          );

        case 'small':
          return <small>{children}</small>;

        case 'blockquote':
          return <blockquote className="block-blockquote">{children}</blockquote>;

        case 'code':
          return (
            <code
              className={`language-${language || 'javascript'}`}
              style={{ display: 'inline-block' }}
            >
              {children}
            </code>
          );

        default:
          return <StyledSection>{children}</StyledSection>;
      }
    },
    code({ node: { code, language } }) {
      return <BlockCode language={language}>{code}</BlockCode>;
    },
    figure({ node }) {
      return <BlockFigure node={node} />;
    },
    videoEmbed({ node }) {
      return (
        <ResponsiveWrapper>
          <ReactPlayer
            className="react-player"
            height="100%"
            width="100%"
            url={`https://youtu.be/${node.id}`}
            controls
          />
        </ResponsiveWrapper>
      );
    },
  },
};

const BlockContent = ({ blocks }) => <StyledBase blocks={blocks} serializers={serializers} />;

BlockContent.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default BlockContent;
