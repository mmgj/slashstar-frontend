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
import Article from '../components/Article';
import PostGrid from '../components/layout/PostGrid';

import BespokePost from './bespoke-post';
import { imageUrlFor, toPlainText } from '../lib/helpers/sanity-helpers';


const BlogPostTemplate = ({ data, errors, location }) => {
  const {
    post: { mainImage, title, _rawBody: body, bespoke, _rawExcerpt: excerpt },
  } = data;

  return (
    <>
      {errors && <h1>Errored!</h1>}
      {data && (
        <PageWrapper
          pageTitle={title}
          pageLocation={location}
          pageImage={imageUrlFor(mainImage).url()}
          pageExcerpt={toPlainText(excerpt)}
        >
          {bespoke
            ? (<BespokePost data={data} />)
            : (
              <PostGrid>
                <PageHeader />
                {mainImage.asset && (
                  <BigImage img={mainImage} shadow />
                )}
                <Article>
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
                </Article>
                <PageMeta data={data} />
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
  location: undefined,
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.object,
  location: PropTypes.object,
};

export const query = graphql`
query BlogPostTemplateQuery($id: String!) {
  post: sanityPost(id: { eq: $id }) {
    ...postQuery
  }
}
`;

export default BlogPostTemplate;
