import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from './aux/prism';
import './aux/prism-monokai.css';

const CodeBlock = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <pre className={`line-numbers language-${language}`}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

CodeBlock.defaultProps = {
  language: 'javascript',
};

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
