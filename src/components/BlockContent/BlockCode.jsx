import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
/* TODO: Prism should probably be a peer dependency  */
import Prism from './prism';
import './prism-monokai.css';

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
