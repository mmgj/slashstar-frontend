import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { imageUrlFor, buildImageObj } from '../lib/helpers/sanity-helpers';
import BlockContent from './BlockContent';
import ZoomBox from './ZoomBox';

const Text = styled.div`
  flex-basis: 2;
  max-width: 400px;
  text-align: right;
  margin: 0 3rem;
  h1 {
    font-family: ${props => props.theme.fonts.headings};
    color: ${props => props.theme.colors.darkgray};
    margin: 0;
  }
  p {
    margin: .8rem;
    font-size: smaller;
    font-style: italic;
  }
`;

const Preview = styled(Link)`
  display: flex;
  align-items: flex-start;
  color: ${props => props.theme.colors.darkgray};
  text-decoration: none;
  margin: 3rem 0;
  :focus, :hover {
    background: #fafafa;
    h1 {
      text-decoration: underline;
    }
  }
  @media(max-width: ${props => props.theme.media.medium}px) {
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 1rem 4rem 1rem;
    ${Text} {
      margin: 0 1rem;
    }
    .zoombox-outer {
        max-width: calc(100vw - 2rem);
    }
  }
  @media(max-width: ${props => props.theme.media.small}px) {
    flex-direction: column-reverse;
    .zoombox-outer {
        max-width: calc(100vw - 2rem);
      }
    background: #fafafa;
    ${Text} {
      margin-top: 1.1rem;
    }
  }
  @media(max-width: ${props => props.theme.media.xsmall}px) {
    .zoombox-outer {
      height: 300px;
    }
  }
`;

const PostPreview = ({ item }) => {
  const { title, _rawExcerpt: excerpt, mainImage, slug } = item.node;

  const imgUrl = mainImage.asset ? imageUrlFor(buildImageObj(mainImage)).width(500).url() : 'https://picsum.photos/500/200';
  return (
    <Preview to={`/posts/${slug.current}`}>
      <Text>
        <h1>{title.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('·')}</h1>
        <BlockContent blocks={excerpt} />
      </Text>
      <ZoomBox
        img={imgUrl}
        width={400}
        height={100}
      />
    </Preview>
  );
};

PostPreview.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PostPreview;
