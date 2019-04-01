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
