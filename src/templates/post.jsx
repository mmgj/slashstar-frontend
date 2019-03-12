import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import BigImage from '../components/BigImage';
import BlockContent from '../components/blockcontent/BlockContent';
import PageMeta from '../components/PageMeta';
import Heading from '../components/atoms/Heading';

const GridContainer = styled.div`
  display: grid;
  margin: 0 auto;

  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: min-content;

  header, footer {
    grid-column: 1 / -1;
    min-height: 100px;
    padding: 20px;
  }
  footer {
    grid-row: - 1;
  }
  header {
    grid-row: 1;
  }
  figure {
    height: 0;
    padding-bottom: 50%;
    width: 100%;
    overflow: hidden;
    grid-column: 1 / -1;
    img {
      width: 100%;
      height: auto;
    }
  }
  article {
    z-index: 100;
    padding: 0 2.5rem 10vh 2.5rem;
    margin-top: -15vw;
    background: white;
    grid-column: 2 / 12;
  }
  aside {
    grid-column: 13 / 16;
  }
  @media (min-width: 1200px) {
    picture {
    padding-bottom: 30%;
      img {
        transform: translateY(-20%);
      }
    }
  }
  @media (max-width: 1024px) {
    article {
      grid-column: 2 / 13;
    }
    aside {
      grid-column: 13 / 17;
      grid-row: 3;
    }
  }
  @media (max-width: 799px) {
    article {
      grid-column: 2 / 16;
    }
    aside {
      min-height: 100px;
      grid-column: 1 / 17;
      grid-row: auto;
    }
  }
`;

const BlogPostTemplate = ({ data, errors }) => {
  const {
    post: { mainImage, title, _rawBody: body },
  } = data;
  return (
    <>
      {errors && <h1>Errored!</h1>}
      {data && (
        <PageWrapper>
          <GridContainer>
            <PageHeader />
            {mainImage.asset && (
              <BigImage asset={mainImage.asset} />
            )}
            <article>
              <Heading h={1}>{title}</Heading>
              <BlockContent blocks={body} />
            </article>
            <PageMeta
              data={data.post}
            />
            <footer>Here is some contact info</footer>
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
