import React from 'react';
import PropTypes from 'prop-types';
import BaseBlockContent from '@sanity/block-content-to-react';

import Figure from './Figure';
import CodeBlock from './CodeBlock';
import Heading from '../Layout/Heading';

const serializers = {
  types: {
    block(props) {
      // Can't be bothered to do PropTypes for every case.
      // eslint-disable-next-line
      const { node: { language, style }, children } = props;
      switch (style) {
        case 'h1':
          return <Heading h={1}>{children}</Heading>;

        case 'h2':
          return <Heading h={2}>{children}</Heading>;

        case 'h3':
          return <Heading h={3}>{children}</Heading>;

        case 'h4':
          return <Heading h={4}>{children}</Heading>;

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
      return <Figure {...node} />;
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

BlockContent.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default BlockContent;
