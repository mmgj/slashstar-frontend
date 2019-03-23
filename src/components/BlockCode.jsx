import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from '../lib/aux/prism';
import '../lib/aux/prism-monokai.css';

const BlockCode = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <pre className={`line-numbers language-${language}`}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

BlockCode.defaultProps = {
  language: 'javascript',
};

BlockCode.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

export default BlockCode;
