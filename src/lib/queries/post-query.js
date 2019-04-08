import { graphql } from 'gatsby';

export const postQuery = graphql`
  fragment postQuery on SanityPost {
      id
      bespoke
      publishedAt
      categories {
        title
      }
      mainImage {
        crop {
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
        centered
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
      _rawExcerpt
      authors {
        _key
        _type
        roles
        person {
          id
          name
          twitter
          _rawImage(resolveReferences: {maxDepth: 5})
          slug {
            current
          }
        }
      }
      pageMeta {
        metaKeywords
        metaTitle
        openGraphTitle
        openGraphDescription
        openImage {
          _type
          asset {
            _id
            id
            fixed(width:1200) {
              base64
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
        twitterTitle
        twitterDescription
        twitterImage {
          _type
          asset {
            _id
            id
            fixed(width:800) {
              base64
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
  }`;
