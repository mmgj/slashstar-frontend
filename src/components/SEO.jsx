/* TODO: Write out SEO cascade */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ pageTitle, pageImage, pageExcerpt, location }) => {
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
      <meta property="og:url" content={location.href} />
      <meta property="og:title" content={pageTitle || siteData.site.title} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:description" content={pageExcerpt || siteData.site.description} />
      <meta property="og:site_name" content={siteData.site.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="Martin Jacobsen" />

      {/* Twitter */}

      <meta name="twitter:card" content={pageExcerpt || siteData.site.description} />
      <meta name="twitter:site" content="@slashstar_dev" />
      <meta name="twitter:creator" content="@mmenneske" />
      <meta name="twitter:url" content={location.href} />
      <meta name="twitter:title" content={pageTitle || siteData.site.title} />
      <meta name="twitter:description" content={pageExcerpt || siteData.site.description} />
      <meta name="twitter:image" content={pageImage} />

      {/* Misc */}

    </Helmet>
  );
};

SEO.defaultProps = {
  pageTitle: undefined,
  pageImage: undefined,
  pageExcerpt: undefined,
  location: {
    host: 'slashstar.dev',
    href: 'https://slashstar.dev',
  },
};

SEO.propTypes = {
  pageTitle: PropTypes.string,
  pageImage: PropTypes.string,
  pageExcerpt: PropTypes.string,
  location: PropTypes.shape({
    host: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default SEO;
