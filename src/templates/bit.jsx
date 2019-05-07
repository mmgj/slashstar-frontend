import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlockContent from '../components/BlockContent';
import PageWrapper from '../components/PageWrapper';
import { toPlainText } from '../lib/helpers/sanity-helpers';

const BitTemplate = ({ data, errors, location }) => {
  const {
    bit: { title, _rawBlurb: blurb, _rawCode: code },
  } = data;
  return (
    <PageWrapper pageTitle={title} pageLocation={location} pageExcerpt={toPlainText(blurb)}>
      {errors && <h1>Oops!</h1>}
      <h1>{title}</h1>
      <BlockContent blocks={code} />
    </PageWrapper>
  );
};

BitTemplate.defaultProps = {
  data: undefined,
  errors: undefined,
  location: undefined,
};

BitTemplate.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.object,
  location: PropTypes.object,
};

export const query = graphql`
  query SnippetTemplateQuery($id: String!) {
    bit: sanityBit(id: { eq: $id }) {
      title
      _rawBlurb(resolveReferences: { maxDepth: 5 })
      _rawCode(resolveReferences: { maxDepth: 5 })
    }
  }
`;

export default BitTemplate;
