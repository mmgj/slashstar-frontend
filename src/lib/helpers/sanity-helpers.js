import React from 'react';
import { Link } from 'gatsby';
import imageUrlBuilder from '@sanity/image-url';


/** Image Helpers */

const builder = imageUrlBuilder({
  projectId: process.env.GATSBY_PROJECT_ID,
  dataset: process.env.GATSBY_DATA_SET,
});

export function imageUrlFor(source) {
  return builder.image(source);
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

/** Link Helpers */

const getRefURL = ref => `/${ref._type}s/${ref.slug.current}`;

export const linkBuilder = (link) => {
  console.log('link: ', link);
  switch (link._type) {
    case 'linkInternal':
      return <Link to={getRefURL(link.reference)}>{link.title}</Link>;
    case 'linkExternal':
      return <a href={link.url}>{link.title}</a>;
    default:
      return '';
  }
};
