import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';

import Figure from './Figure';
import CodeBlock from './CodeBlock';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="block-header h1head">{props.children}</h1>;

        case 'h2':
          return <h2 className="block-header h2head">{props.children}</h2>;

        case 'h3':
          return <h3 className="block-header h1head">{props.children}</h3>;

        case 'h4':
          return <h4 className="block-header h1head">{props.children}</h4>;

        case 'blockquote':
          return <blockquote className="block-blockquote">{props.children}</blockquote>;

        case 'code':
          return <code className={`language-none`}>{props.children}</code>;

        default:
          return <p className="block-paragraph">{props.children}</p>;
      }
    },
    code(props) {
      return (
        <CodeBlock language={props.node.language}>
          {props.node.code}
        </CodeBlock>
      );
    },
    figure(props) {
      return <Figure {...props.node} />;
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
