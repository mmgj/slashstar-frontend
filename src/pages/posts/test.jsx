import React from 'react';
import styled from '@emotion/styled';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import Brand from '../../components/Brand';

const Grid = styled.div`
  display: grid;
  margin: 0 auto;

  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: min-content;

  header, footer {
    grid-column: 1 / -1;
    min-height: 100px;
    padding: 20px;
    border: 1px solid green;
  }
  footer {
    grid-row: - 1;
  }
  header {
    grid-row: 1;
  }

  picture {
    height: 0;
    padding-bottom: 50%;
    width: 100%;
    overflow: hidden;
    grid-column: 1 / -1;
    img {
      width: 100%;
      height: auto;
    }
  }
  article {
    background: #ccc;
    grid-column: 2 / 13;
    border: 1px solid black;
    h1, h2, section {
      padding: 0 2rem;
    }
  }
  aside {
    border: 1px solid orange;
    grid-column: 13 / 16;
  }
  @media (min-width: 1200px) {
    picture {
    padding-bottom: 30%;
      img {
        transform: translateY(-20%);
      }
    }
  }
  @media (max-width: 1024px) {
    article {
      background: #ccc;
      grid-column: 1 / 13;
    }
    aside {
      min-height: 100px;
      border: 3px solid hotpink;
      grid-column: 13 / 17;
      grid-row: 3;
    }
  }
  @media (max-width: 799px) {
    article {
      background: #ccc;
      grid-column: 1 / 17;
    }
    aside {
      min-height: 100px;
      border: 1px solid orange;
      grid-column: 1 / 17;
      grid-row: auto;
    }
  }
`;


const TestPage = () =>
  (
    <PageWrapper>
      <Grid>
        <header>
          <Brand colored>Duck Dog Dev</Brand>
        </header>
        <picture>
          <img alt="Random Picsum" src="https://picsum.photos/1000/500/?random" />
        </picture>
        <article>
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
        </article>
        <aside>
          I am a sidebar
        </aside>
        <footer>Here is some contact info</footer>
      </Grid>
    </PageWrapper>
  );

TestPage.propTypes = {
};

export default TestPage;
