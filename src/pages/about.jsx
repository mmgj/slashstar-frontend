import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import PageGrid from '../components/layout/PageGrid';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Heading from '../components/Heading';
import PageWrapper from '../components/PageWrapper';
import BigImage from '../components/BigImage';
import BlockContent from '../components/BlockContent';

const StyledArticle = styled.article`
  margin-top: -20vw;
  z-index: 1;
  pre {
    margin: 5rem 0;
    font-size: 1.6rem;
  }
`;

const AboutPage = () => {
  const data = useStaticQuery(graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
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
  console.log('data: ', data);
  const {
    page: { mainImage, title, _rawBody: body },
  } = data;
  return (
    <PageWrapper>
      <PageGrid>
        <PageHeader />
        {mainImage.asset && (
          <BigImage img={mainImage} />
        )}
        <StyledArticle>
          <div className="shadow-boxer">
            <Heading
              h={1}
              css={theme => ({
                color: theme.colors.black,
                marginBottom: '1rem',
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
        </StyledArticle>
        <PageFooter />
      </PageGrid>
    </PageWrapper>
  );
};

export default AboutPage;
