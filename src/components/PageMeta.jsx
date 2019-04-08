import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import RoleList from './RoleList';

const StyledMeta = styled.aside`
  background: ${props => props.theme.colors.bg};
  padding: 1.6rem;
  padding-top: 7rem;
  ul {
    list-style-type: none;
  }
  .pub-date {
    font-size: 1.6rem;
  }
`;
/* REVIEW: Raison de vivre? */
const PageMeta = ({ data }) => {
  const {
    post: { publishedAt, categories, authors },
  } = data;

  return (
    <StyledMeta>
      {publishedAt && (
        <div className="pub-date">
          Posted{' '}
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? distanceInWords(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), 'MMMM Do YYYY')}
        </div>
      )}
      {authors && <RoleList items={authors} title={authors.length > 1 ? 'Authors' : ''} />}
      {categories && false && (
        <div>
          <h4>Filed:</h4>
          <ul>
            {categories.map(category => (
              <li key={category._id}>{category.title}</li>
            ))}
          </ul>
        </div>
      )}
    </StyledMeta>
  );
};

PageMeta.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageMeta;
