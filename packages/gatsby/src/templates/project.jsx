import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
// import Container from '../components/container';
// import GraphQLErrorList from '../components/graphql-error-list';
// import Project from '../components/project';
// import SEO from '../components/seo';
// import Layout from '../containers/layout';


const ProjectTemplate = (props) => {
  const { data, errors } = props;
  const project = data && data.project;
  console.log('data: ', data);

  return (
    <Layout pageType="project" pageData={data}>
      {errors && <h1>Errored!</h1>}
      {project && <h1>OK!</h1>}
    </Layout>
    // <Layout>
    //   {errors && <SEO title="GraphQL Error" />}
    //   {project && <SEO title={project.title || 'Untitled'} />}

  //   {errors && (
  //     <Container>
  //       <GraphQLErrorList errors={errors} />
  //     </Container>
  //   )}
  //   {project && <Project {...project} />}
  // </Layout>
  );
};

ProjectTemplate.defaultProps = {
  data: undefined,
  errors: undefined,
};

ProjectTemplate.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.object,
};

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
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
      members {
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
