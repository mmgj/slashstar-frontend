import { Link } from 'gatsby';
import { format } from 'date-fns';
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import BlockContent from './BlockContent';
import CardImage from './CardImage';
import CodeHeader from './CodeHeader';

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.headings};
  font-size: 3.4rem;
  margin-bottom: 0;
`;

const Blurb = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  section {
    padding: 0 0 0 0;
    font-size: 1.6rem;
    font-style: italic;
  }
`;

const cardWidth = 330;

const Card = styled.div`
  z-index: ${props => 50 - props.num};
  border-radius: 0.8rem;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background: #fff;
  width: ${cardWidth}px;
  height: auto;
  transition: all 0.2s ease-in;
  @media (max-width: ${props => props.theme.media.large}px) {
    margin: ${props => props.num * 1.5}rem -100px;
    transform: rotate(${props => props.num * 2}deg) scale(${props => 1 - props.num / 10});
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  :hover {
    transform: translateY(-2rem);
    z-index: 100;
  }
  @media (max-width: ${props => props.theme.media.small}px) {
    transform: none;
    &:first-of-type {
      margin-left: auto;
    }
    &:last-of-type {
      margin-right: auto;
    }
    :hover {
      transform: none;
      z-index: 100;
    }
  }
  section {
    text-align: left;
    width: calc(${cardWidth}px - 3.6rem);
    a,
    a:visited {
      color: ${props => props.theme.colors.black};
      text-decoration: none;

      :focus,
      :hover {
        ${Title} {
          text-decoration: underline;
        }
      }
    }
    padding: 0 1.8rem;
    .date {
      margin-top: -20px;
      color: ${props => props.theme.colors.gray};
    }
  }
`;

const PostPreviewCard = ({ item, num }) => {
  if (item.node._type === 'post') {
    const { title, _rawExcerpt: excerpt, mainImage, slug, publishedAt } = item.node;
    return (
      <Card num={num}>
        <Link to={`/posts/${slug.current}`}>
          <CardImage image={mainImage} />
        </Link>
        <section>
          <Link to={`/posts/${slug.current}`}>
            <Title>{title.toLowerCase()}</Title>
            <small className="date">Blog post {format(new Date(publishedAt), 'DD.MM.YY')}</small>
            <Blurb>
              <BlockContent blocks={excerpt} />
            </Blurb>
          </Link>
        </section>
      </Card>
    );
  }
  if (item.node._type === 'bit') {
    const { slug, title, _rawBlurb: blurb, publishedAt, _rawCode: code } = item.node;
    return (
      <Card num={num}>
        <CodeHeader code={code} />
        <section>
          <Link to={`/bits/${slug.current}`}>
            <Title>{title.toLowerCase()}</Title>
            <small className="date">Snippet {format(new Date(publishedAt), 'DD.MM.YY')}</small>
            <Blurb>
              <BlockContent blocks={blurb} />
            </Blurb>
          </Link>
        </section>
      </Card>
    );
  }
  return false;
};

PostPreviewCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PostPreviewCard;
