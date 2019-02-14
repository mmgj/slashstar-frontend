import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
// import '../../styles/prism-monokai.css';

class CodeBlock extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { children, language } = this.props;
    return (
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: 'javascript',
};

CodeBlock.propTypes = {
  children: PropTypes.element.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
