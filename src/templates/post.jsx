import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import BigImage from '../components/BigImage';
import BlockContent from '../components/BlockContent';
import PageMeta from '../components/PageMeta';
import Heading from '../components/Heading';
import PostGrid from '../components/layout/PostGrid';

import BespokePost from './bespoke-post';


const BlogPostTemplate = ({ data, errors }) => {
  const {
    post: { mainImage, title, _rawBody: body, bespoke },
  } = data;
  return (
    <>
      {errors && <h1>Errored!</h1>}
      {data && (
        <PageWrapper>
          {bespoke
            ? (<BespokePost data={data} />)
            : (
              <PostGrid>
                <PageHeader />
                {mainImage.asset && (
                  <BigImage img={mainImage} />
                )}
                <article>
                  <Heading h={1}>{title}</Heading>
                  <BlockContent blocks={body} />
                </article>
                <PageMeta data={data.post} />
                <PageFooter>Made with Love and Code</PageFooter>
              </PostGrid>
            )}
        </PageWrapper>
      )}
    </>
  );
};

BlogPostTemplate.defaultProps = {
  data: undefined,
  errors: undefined,
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.object,
};

export const query = graphql`
query BlogPostTemplateQuery($id: String!) {
  post: sanityPost(id: { eq: $id }) {
    ...postQuery
  }
}
`;

export default BlogPostTemplate;
