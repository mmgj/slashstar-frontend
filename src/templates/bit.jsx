import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import BlockContent from '../components/BlockContent';
import PageWrapper from '../components/PageWrapper';
import Heading from '../components/Heading';
import { toPlainText } from '../lib/helpers/sanity-helpers';
import CodeBit from '../components/CodeBit';

const FullScreenWrap = styled.main`
  background-color: #272822;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BitTemplate = ({ data: { bit }, errors, location }) => (
  <PageWrapper pageTitle={bit.title} pageLocation={location} pageExcerpt={toPlainText(bit.blurb)}>
    <FullScreenWrap>
      {errors && <span>{errors}</span>}
      <CodeBit bit={bit} />
    </FullScreenWrap>
  </PageWrapper>
);

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
      id
      _key
      _type
      _createdAt
      _updatedAt
      title
      code {
        _key
        _type
        code
        language
        filename
      }
      tags
      _rawBlurb(resolveReferences: { maxDepth: 5 })
      _rawCode(resolveReferences: { maxDepth: 5 })
    }
  }
`;

export default BitTemplate;
