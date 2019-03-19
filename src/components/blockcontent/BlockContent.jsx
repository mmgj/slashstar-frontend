import React from 'react';
import PropTypes from 'prop-types';
import BaseBlockContent from '@sanity/block-content-to-react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import BlockFigure from './BlockFigure';
import CodeBlock from './CodeBlock';
import Heading from '../Heading';

const ResponsiveWrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    .react-player {
      position: absolute;
      top: 0;
      left: 0;
}
`;

const serializers = {
  // FIXME: ⬇ Make this work!
  marks: {
    // eslint-disable-next-line
    internalLink(props) {
      return <span>oops</span>;
    },
  },
  types: {
    block(props) {
      // Can't be bothered to do PropTypes for every case.
      // eslint-disable-next-line
      const { node: { language, style }, children } = props;
      switch (style) {
        case 'h1':
          return <Heading inline h={1}>{children}</Heading>;

        case 'h2':
          return <Heading inline h={2}>{children}</Heading>;

        case 'h3':
          return <Heading inline h={3}>{children}</Heading>;

        case 'h4':
          return <Heading inline h={4}>{children}</Heading>;

        case 'blockquote':
          return <blockquote className="block-blockquote">{children}</blockquote>;

        case 'code':
          return <code className={`language-${language || 'javascript'}`}>{children}</code>;

        default:
          return <p>{children}</p>;
      }
    },
    code(props) {
      // eslint-disable-next-line
      const { node: { code, language } } = props;
      return (
        <CodeBlock language={language}>
          {code}
        </CodeBlock>
      );
    },
    figure(props) {
      // eslint-disable-next-line
      const { node } = props;
      return <BlockFigure {...node} />;
    },
    videoEmbed(props) {
      // eslint-disable-next-line
      const { node } = props;
      return (
        <ResponsiveWrapper>
          <ReactPlayer
            className="react-player"
            height="100%"
            width="100%"
            url={`https://youtu.be/${node.id}`}

          />
        </ResponsiveWrapper>
      );
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

BlockContent.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default BlockContent;
