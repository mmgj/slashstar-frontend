
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
async function createSnippetPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions;
  const result = await graphql(`
    {
      allSanityBit(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const snippetEdges = (result.data.allSanityBit || {}).edges || [];

  snippetEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    // const dateSegment = format(publishedAt, 'YYYY/MM');
    const path = `/bits/${slug.current}/`;

    reporter.info(`Creating snippet page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/bit.jsx'),
      context: { id },
    });

    createPageDependency({ path, nodeId: id });
  });
}


async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    // const dateSegment = format(publishedAt, 'YYYY/MM');
    const path = `/posts/${slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/post.jsx'),
      context: { id },
    });

    createPageDependency({ path, nodeId: id });
  });
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
  await createSnippetPages(graphql, actions, reporter);
};
