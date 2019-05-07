import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import PostPreviewCard from '../components/PostPreviewCard';
import PageFooter from '../components/PageFooter';
import IndexGrid from '../components/layout/IndexGrid';

const Posts = styled.div`
  grid-column: 2 / 16;
  grid-row: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  margin: 0;
  text-align: right;
  pointer-events: none;
  [class*='Card'] {
    position: relative;
    pointer-events: auto;
  }
  @media (max-width: ${props => props.theme.media.large}px) and (min-width: ${props =>
  props.theme.media.small}px) {
    :hover > div:not(:hover) {
      position: relative;
      ::after {
        transition: all 0.2s ease-in;
        content: 'wat';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        border-radius: 0.8rem;
        opacity: 0.5;
      }
    }
    :hover > div:hover {
      transform: scale(1.1);
      &:last-of-type {
        transform: scale(1.2) translateX(-15%);
      }
    }
  }
  @media (max-width: ${props => props.theme.media.small}px) {
    flex-direction: column;
    grid-column: 1 / 17;
    > div {
      width: 90vw;
      margin: 2rem auto;
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query CardNavPostsQuery {
      posts: allSanityPost(limit: 3, sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            _type
            publishedAt
            ...postsQuery
          }
        }
      }
      bits: allSanityBit(limit: 3, sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            _type
            title
            publishedAt
            _rawBlurb(resolveReferences: { maxDepth: 5 })
            _rawCode(resolveReferences: { maxDepth: 5 })
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const { posts, bits } = data;
  const edges = [...posts.edges, ...bits.edges]
    .sort((a, b) => new Date(b.node.publishedAt) - new Date(a.node.publishedAt))
    .slice(0, 3);
  return (
    <PageWrapper>
      <IndexGrid>
        <PageHeader />
        <Posts>
          {edges.map((item, index) => (
            <PostPreviewCard key={item.node.id} item={item} num={index} />
          ))}
        </Posts>
        <PageFooter>Made with love & code</PageFooter>
      </IndexGrid>
    </PageWrapper>
  );
};
