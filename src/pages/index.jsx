import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import PostPreview from '../components/PostPreview';
import PageFooter from '../components/PageFooter';
import IndexGrid from '../components/layout/IndexGrid';


const Posts = styled.div`
  grid-column: 2 / 16;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0;
  text-align: right;
  @media(max-width: ${props => props.theme.media.small}px) {
    grid-column: 1 / 17;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allSanityPost(
        limit: 10
        sort: { fields: [publishedAt], order: DESC }
      ) {
        edges {
          node {
            ...postsQuery
          }
        }
      }
    }
  `);
  const { posts: { edges } } = data;
  return (
    <PageWrapper>
      <IndexGrid>
        <PageHeader />
        <Posts>
          {edges.map(item => <PostPreview key={item.node.id} item={item} />)}
        </Posts>
        <PageFooter>
          Made with love & code
        </PageFooter>
      </IndexGrid>
    </PageWrapper>
  );
};
