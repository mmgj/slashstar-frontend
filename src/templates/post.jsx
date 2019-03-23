import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';


import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import BigImage from '../components/BigImage';
import BlockContent from '../components/BlockContent/index';
import PageMeta from '../components/PageMeta';
import Heading from '../components/Heading';
import PostGrid from '../components/layout/PostGrid';

import BespokePost from './bespoke-post';

const StyledArticle = styled.article`
  margin-top: -15vw;
  z-index: 1;
  pre {
    margin: 5rem 0;
    font-size: 1.6rem;
  }
`;

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
                <StyledArticle>
                  <div className="shadow-boxer">
                    <Heading
                      h={1}
                      css={theme => ({
                        color: theme.colors.black,
                        marginBottom: '1rem',
                        textShadow: `
                          1px 0px 1px #ccc, 0px 1px 1px #eee,
                          2px 1px 1px #ccc, 1px 2px 1px #eee,
                          3px 2px 1px #ccc, 2px 3px 1px #eee,
                          4px 3px 1px #ccc, 3px 4px 1px #eee,
                          5px 4px 1px #ccc, 4px 5px 1px #eee,
                          6px 5px 1px #ccc, 5px 6px 1px #eee,
                          7px 6px 1px #ccc
                        `,
                      })}
                    >
                      {title}
                    </Heading>
                    <BlockContent blocks={body} />
                  </div>
                </StyledArticle>
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
