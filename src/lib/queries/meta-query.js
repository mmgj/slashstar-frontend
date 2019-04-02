import { graphql } from 'gatsby';

export const metaQuery = graphql`
  fragment metaQuery on SanitySiteSettings {
    siteMeta {
      _type
      metaKeywords
      metaTitle
      openGraphDescription
      twitterTitle
      twitterDescription
      twitterImage {
        asset {
          _id
          id
          fixed {
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
      openImage {
        asset {
          _id
          id
          fixed {
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
  }
`;
