import { graphql } from 'gatsby';


export const postsQuery = graphql`
  fragment postsQuery on SanityPost{
    id
    publishedAt
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
      }
      alt
    }
    title
    _rawExcerpt
    slug {
      current
    }
  }
`;
