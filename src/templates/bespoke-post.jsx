import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import BlockContent from '../components/BlockContent';
import { imageUrlFor, buildImageObj } from '../lib/helpers/sanity-helpers';

const BespokePost = ({ data }) => {
  const siteData = useStaticQuery(graphql`
    query UnstyledHeaderQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `);
  const {
    post: { mainImage, title, _rawBody: body },
  } = data;
  const {
    site: { title: siteTitle },
  } = siteData;
  return (
    <PageWrapper>
      <header>
        <h1 className="brand">{siteTitle}</h1>
      </header>
      <main>
        <picture>
          {mainImage.asset && (
            <img alt={mainImage.alt} src={imageUrlFor(buildImageObj(mainImage))} />
          )}
        </picture>
        <article>
          <h1>{title}</h1>
          <BlockContent blocks={body} />
        </article>
      </main>
      <footer>Made with love & code</footer>
    </PageWrapper>
  );
};

BespokePost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BespokePost;
