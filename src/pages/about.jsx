import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PropTypes } from 'prop-types';

import { toPlainText, imageUrlFor } from '../lib/helpers/sanity-helpers';

import PageGrid from '../components/layout/PageGrid';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Heading from '../components/Heading';
import PageWrapper from '../components/PageWrapper';
import BigImage from '../components/BigImage';
import BlockContent from '../components/BlockContent';
import Article from '../components/Article';


const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody(resolveReferences: {maxDepth: 5})
      mainImage {
        alt
        asset {
          id
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
  `);
  const {
    page: { mainImage, title, _rawBody: body },
  } = data;
  return (
    <PageWrapper
      pageTitle={title}
      pageLocation={location}
      pageImage={imageUrlFor(mainImage.asset).url()}
      pageExcerpt={`${toPlainText(body).substr(0, 195)}...`}
    >
      <PageGrid>
        <PageHeader />
        {mainImage.asset && (
          <BigImage img={mainImage} />
        )}
        <Article>
          <div className="shadow-boxer">
            <Heading
              h={1}
              css={theme => ({
                color: theme.colors.black,
                marginBottom: '4rem',
                textShadow: `
                  1px 0px 1px #ccc, 0px 1px 1px #eee,
                  2px 1px 1px #ccc, 1px 2px 1px #eee,
                  3px 2px 1px #ccc, 2px 3px 1px #eee,
                  4px 3px 1px #ccc, 3px 4px 1px #eee,
                  5px 4px 1px #ccc, 4px 5px 1px #eee,
                  6px 5px 1px #ccc, 5px 6px 1px #eee,
                  7px 6px 1px #ccc
                `,
              })}
            >
              {title}
            </Heading>
            <BlockContent blocks={body} />
          </div>
        </Article>
        <PageFooter />
      </PageGrid>
    </PageWrapper>
  );
};

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutPage;
