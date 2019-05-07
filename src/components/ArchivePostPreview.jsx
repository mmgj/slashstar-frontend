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

const FullWidthRow = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  > :first-child {
    width: 25vw;
    min-width: 30rem;
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

const ArchivePostPreview = ({ item, num }) => {
  if (item.node._type === 'post') {
    const { title, _rawExcerpt: excerpt, mainImage, slug, publishedAt } = item.node;
    return (
      <FullWidthRow num={num}>
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
      </FullWidthRow>
    );
  }
  if (item.node._type === 'bit') {
    const { slug, title, _rawBlurb: blurb, publishedAt, _rawCode: code } = item.node;
    return (
      <FullWidthRow num={num}>
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
      </FullWidthRow>
    );
  }
  return false;
};

ArchivePostPreview.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ArchivePostPreview;
