import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Heading from '../components/atoms/Heading';
import Header from '../components/atoms/Header';
import Article from '../components/atoms/Article';
import Nav from '../components/atoms/Nav';

const Grid = styled.div`
  display: grid;
  margin: 0 auto;

  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: auto 1rem;
  picture {
    height: 0;
    padding-bottom: 50%;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  article {
    background: #ccc;
    grid-column: 2 / 13 ;
    /* grid-row-start: 2; */
    border: 1px solid black;
    h1, h2, section {
      padding: 0 2rem;
    }
  }
  aside {
    border: 1px solid orange;
    grid-column: 13 / 16;
  }
`;


const TestPage = () => {
  return (
    <PageWrapper>
      <Header>
        <div className="brand">DuckDog.dev</div>
        <Nav>
          <ul>
            <li>
              <Link to="/">Leave</Link>
            </li>
            <li>
              <Link to="/grf">404</Link>
            </li>
          </ul>
        </Nav>

      </Header>
      <Grid>
        <Article>
          <picture>
            <img alt="Random Picsum" src="https://picsum.photos/1000/500/?random" />
          </picture>
          <Heading>I am the big cool header yeah</Heading>
          <Heading h={2}>I am a smaller header</Heading>
          <section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </section>
          <section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </section>
          <section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </section>
        </Article>
        <aside>
          I am a sidebar
        </aside>
      </Grid>
      <footer>Here is some contact info</footer>
    </PageWrapper>
  );
};

TestPage.propTypes = {
};

export default TestPage;
