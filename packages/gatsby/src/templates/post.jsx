import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Container from '../components/container';
// import GraphQLErrorList from '../components/graphql-error-list';
// import BlogPost from '../components/blog-post';
// import SEO from '../components/seo';
import Layout from '../components/Layout';
import BlockContent from '../components/blockcontent/BlockContent';


const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  console.log('post: ', post);
  return (
    <div>
      {errors && <h1>Errored!</h1>}
      {post && (
        <Layout siteTitle={post.title}>
          {post._rawBody && <BlockContent blocks={post._rawBody} />}
        </Layout>
      )}
    </div>
    // <Layout>
    //   {errors && <SEO title="GraphQL Error" />}
    //   {post && <SEO title={post.title || 'Untitled'} />}

  //   {errors && (
  //     <Container>
  //       <GraphQLErrorList errors={errors} />
  //     </Container>
  //   )}

  //   {post && <BlogPost {...post} />}
  // </Layout>
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
          }
          name
        }
        roles
      }
    }
  }
`;
