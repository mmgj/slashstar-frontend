import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ul {
    padding: 0;
    list-style-type: none;
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
        <li><Link to="/about"> Page One</Link></li>
        <li><Link to="/contact"> Page Two</Link></li>
      </ul>
    </StyledNav>
  );

export default NavBar;
