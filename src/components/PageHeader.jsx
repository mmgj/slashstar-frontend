import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Brand from './Brand';
import Icon from './icons';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  background: white;
  border-bottom: 1px solid black;
  padding: 1rem;
  .nav-container {
    padding: 0 2rem;
    display: flex;
    .nav-toggle {
      display: none;
    }
    ul {
      display: flex;
      list-style-type: none;
      padding-left: 0;
      li {
        margin: 0 1rem;
        display: inline-block;
        a {
          color: ${props => props.theme.colors.black};
          text-decoration: none;
          margin: 0 1rem;
          border: 0;
        }
        :hover {
          text-decoration: underline;
        }
        &.nope {
          color: #ccc;
          text-decoration: line-through;
        }
      }
    }
  }
  @media (max-width: ${props => props.theme.media.small}px) {
    flex-direction: row-reverse;
    .nav-container {
      display: block;
      padding: 0;
      margin-right: .8rem;
      .nav-toggle {
        display: block;
        display: inline-block;
        border: none;
        margin: 0;
        padding: 0;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
      }
    }
    nav {
      display: none;
      &.nav-visible {
        display: block;
        position: relative;
        ul {
          z-index: 100;
          position: absolute;
          top: 3rem;
          right: 0;
          flex-direction: column;
          margin: 0 auto;
          width: 90vw;
          background-color: white;
          border: 1px solid black;
          box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
          li {
            margin: 0;
            padding: 0;
            a {
              display: block;
              padding: 1.6rem 2rem;
              margin: 0;
              border-bottom: 1px solid black;
            }
            :hover {
              background-color: #fafafa;
            }
          }
        }
      }
    }
  }
`;

const PageHeader = () => {
  const [showNav, setShowNav] = useState(false);
  function onShowNav() {
    setShowNav(true);
  }
  function onHideNav() {
    setShowNav(false);
  }

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `);
  return (
    <StyledHeader>
      <div className="nav-container">
        <button type="button" className="nav-toggle" onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>
        <nav className={`nav${showNav ? ' nav-visible' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/posts">Posts</Link></li> */}
          </ul>
        </nav>
      </div>
      <Brand h={1} colored>
        {data.site.title.toLowerCase()}
      </Brand>
    </StyledHeader>
  );
};

export default PageHeader;
