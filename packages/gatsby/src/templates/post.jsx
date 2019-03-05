import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import BigImage from '../components/BigImage';
import PageTitle from '../components/PageTitle';
import BlockContent from '../components/blockcontent/BlockContent';
import PageMeta from '../components/PageMeta';
import Footer from '../components/Footer';
import Article from '../components/Article';

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
  @media (${props => props.theme.media.maxMed}) {
    display: flex;
    flex-direction: column;
  }
`;

const BlogPostTemplate = ({ data, errors }) => {
  const {
    post: { mainImage, title, _rawBody: body, authors, publishedAt, categories },
  } = data;
  return (
    <>
      {errors && <h1>Errored!</h1>}
      {data && (
        <PageWrapper>
          <GridContainer>
            <Header />
            <BigImage asset={mainImage.asset} />
            <main>
              <PageTitle h={1}>{title}</PageTitle>
              <Article>
                <BlockContent blocks={body} />
              </Article>
            </main>
            <PageMeta data={{ categories, publishedAt, authors }} />
            <Footer />
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
