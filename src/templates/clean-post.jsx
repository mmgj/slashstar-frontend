import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import PageWrapper from '../components/PageWrapper';
import PageHeader from '../components/PageHeader';
import BigImage from '../components/BigImage';
import BlockContent from '../components/blockcontent/BlockContent';


const CleanPostTemplate = ({ data, errors }) => {
  const {
    post: { mainImage, title, _rawBody: body, authors, publishedAt, categories },
  } = data;
  return (
    <>
      {errors && <h1>Errored!</h1>}
      {data && (
        <PageWrapper>
          <PageHeader />
            {mainImage.asset && (
              <div className="main-image-container">
                <BigImage asset={mainImage.asset} />
              </div>
            )}
          <article>
            <h1>{title}</h1>
            <BlockContent blocks={body} />
          </article>
          <aside>
            I am a sidebar
          </aside>
          <footer>Here is some contact info</footer>
        </PageWrapper>
      )}
    </>
  );
};

CleanPostTemplate.defaultProps = {
  data: undefined,
  errors: undefined,
};

CleanPostTemplate.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.object,
};

export default CleanPostTemplate;

// export const query = graphql`
//   query BlogPostTemplateQuery($id: String!) {
//     post: sanityPost(id: { eq: $id }) {
//       id
//       publishedAt
//       categories {
//         _id
//         title
//       }
//       mainImage {
//         crop {
//           _key
//           _type
//           top
//           bottom
//           left
//           right
//         }
//         hotspot {
//           _key
//           _type
//           x
//           y
//           height
//           width
//         }
//         asset {
//           _id
//           fluid(maxWidth: 1200) {
//             ...GatsbySanityImageFluid
//           }
//           metadata {
//             lqip
//             dimensions {
//               aspectRatio
//             }
//           }
//         }
//         alt
//       }
//       title
//       slug {
//         current
//       }
//       _rawBody
//       authors {
//         _key
//         person {
//           image {
//             crop {
//               _key
//               _type
//               top
//               bottom
//               left
//               right
//             }
//             hotspot {
//               x
//               y
//               height
//               width
//             }
//             asset {
//               _id
//             }
//           }
//           name
//         }
//         roles
//       }
//     }
//   }
// `;
