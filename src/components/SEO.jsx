/**
 * The values for Open Graph and Twitter cascade as such:
 * If an override value is defined in the post or page metaCard, use this.
 * Else if the page<Field]> is defined use this.
 * Else use the siteSettings value.
 * I.e. The meta specific overrides the post/page specific which overrides the sitewide.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { imageUrlFor } from '../lib/helpers/sanity-helpers';


const resolveImage = sanityImage => (sanityImage ? imageUrlFor(sanityImage.asset).url() : false);

const SEO = ({ pageTitle, pageImage, pageExcerpt, pageMeta, location }) => {
  const siteData = useStaticQuery(graphql`
  query SEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      ...metaQuery
    }
  }
  `);

  const { site } = siteData;
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
    >
      <title>{`${site.title} - ${pageTitle || ''}`}</title>
      <meta name="description" content={site.description} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />
      <meta property="article:author" content="Martin Jacobsen" />
      <meta property="og:url" content={location.href} />
      <meta property="og:title" content={pageMeta.openGraphTitle || pageTitle || siteData.site.title} />
      <meta property="og:image" content={resolveImage(pageMeta.openImage) || resolveImage(pageImage) || resolveImage(site.siteMeta.openImage)} />
      <meta property="og:description" content={pageMeta.openGraphTitle || pageExcerpt || siteData.site.description} />
      <meta property="og:site_name" content={siteData.site.title} />

      {/* Twitter */}

      <meta name="twitter:site" content="@slashstar_dev" />
      <meta name="twitter:creator" content="@mmenneske" />
      <meta name="twitter:card" content={pageMeta.twitterDescription || pageExcerpt || siteData.site.description} />
      <meta name="twitter:url" content={location.href} />
      <meta name="twitter:title" content={pageMeta.twitterTitle || pageTitle || siteData.site.title} />
      <meta name="twitter:description" content={pageMeta.twitterDescription || pageExcerpt || siteData.site.description} />
      <meta name="twitter:image" content={resolveImage(pageMeta.twitterImage) || resolveImage(pageImage) || resolveImage(site.siteMeta.twitterImage)} />

      {/* Misc */}

    </Helmet>
  );
};

SEO.defaultProps = {
  pageTitle: undefined,
  pageImage: undefined,
  pageExcerpt: undefined,
  pageMeta: {},
  location: {
    host: 'slashstar.dev',
    href: 'https://slashstar.dev',
  },
};

SEO.propTypes = {
  pageTitle: PropTypes.string,
  pageImage: PropTypes.object,
  pageExcerpt: PropTypes.string,
  pageMeta: PropTypes.object,
  location: PropTypes.shape({
    host: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default SEO;
