import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import BigImage from '../components/BigImage';
import PageTitle from '../components/PageTitle';
import BlockContent from '../components/blockcontent/BlockContent';
import PageMeta from '../components/PageMeta';
import Article from '../components/atoms/Article';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: auto 1fr auto;
  grid-gap: 1em;
  overflow-x: hidden; //dumb bug
  header,
  footer,
  .main-image {
    grid-column: 1 / span 2;
  }
  @media (max-width: ${props => props.theme.media.medium}) {
    display: flex;
    flex-direction: column;
  }
`;

const BlogPostTemplate = ({ data, errors }) => {
  const {
    post: { mainImage, title, _rawBody: body, authors, publishedAt, categories },
  } = data;
  console.log('body: ', body);
  return (
    <>
      {errors && <h1>Errored!</h1>}
      {data && (
        <PageWrapper>
          <GridContainer>
            <PageHeader />
            <BigImage asset={mainImage.asset} />
            <main>
              <PageTitle h={1}>{title}</PageTitle>
              <Article>
                <BlockContent blocks={body} />
              </Article>
            </main>
            <PageMeta data={{ categories, publishedAt, authors }} />
            <PageFooter />
          </GridContainer>
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

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
          metadata {
            lqip
            dimensions {
              aspectRatio
            }
          }
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      authors {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`;
