import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { imageUrlFor, buildImageObj } from '../lib/helpers/sanity-helpers';

const titleCase = str => `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;

const StyledRoles = styled.div`
  margin: 2rem 0 3rem;
  border-top: 1px solid ${props => props.theme.colors.black};
  .headline {
    margin: 0.5rem 0 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-size: .8em;
      margin: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      & > div:last-child {
        flex: 1;
        margin-left: 1rem;
      }
    }
  }
  .avatar {
    position: relative;
    width: 3em;
    height: 3em;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
`;

const RoleList = ({ items, title }) => (
  <StyledRoles>
    <h4 className="headline">{title}</h4>
    <ul>
      {items.map(item => (
        <li key={item._key}>
          <div>
            <div className="avatar">
              {item.person && item.person.image && item.person.image.asset && (
              <img
                src={
                  imageUrlFor(buildImageObj(item.person.image))
                    .width(100)
                    .height(100)
                    .fit('crop')
                    .url()
                    }
                alt={item.person.name}
              />
              )}
            </div>
          </div>
          <div>
            <div>
              <strong>{(item.person && item.person.name) || <em>Missing</em>}</strong>
            </div>
            {item.roles && (
            <div>
              {item.roles.map((role, idx) => {
                switch (true) {
                  case idx === 0:
                    return <span key={role}>{titleCase(role)}</span>;
                  case idx === item.roles.length - 1:
                    return <span key={role}> & {role}</span>;
                  default:
                    return <span key={role}>, {role}</span>;
                }
              })}
            </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </StyledRoles>
);

RoleList.defaultProps = {
  title: 'Folks',
};

RoleList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default RoleList;
