import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const StyledNav = styled.nav`
  display: inline-block;
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
`;

const NavBar = () =>
  (
    <StyledNav>
      <ul>
        <li><Link to="/about"> Home</Link></li>
        <li><Link to="/contact"> About</Link></li>
        <li><Link to="/contact"> Contact</Link></li>
      </ul>
    </StyledNav>
  );

export default NavBar;
