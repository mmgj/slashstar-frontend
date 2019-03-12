import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const StyledNav = styled.nav`
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    li {
      display: inline-block;
      margin: .5rem;
      a {
        color: ${props => props.theme.colors.black};
          text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  display: none;
  &.showNav {
    display: block;
    width: 100%;
    margin: 0;
    ul {

      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;
      li {
        width: 100%;
        padding: 5px 10px 5px 0;
        border-top: 1px solid black;
        margin: 0;
      }
    }
  }
  @media (min-width: ${props => props.theme.media.xsmall}px){
    display: block;
  }
`;

const NavBar = ({ children, className }) => {
  return (
    <StyledNav className={className}>
      <ul>
        {children.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </StyledNav>
  );
};

export default NavBar;
