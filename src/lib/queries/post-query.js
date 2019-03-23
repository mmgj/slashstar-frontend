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
  }`;