import React from 'react';
import { Link } from 'gatsby';
import PageWrapper from '../components/PageWrapper';

export default () => (
  <PageWrapper pageType="index" pageData={{ page: { title: 'Ducks & Dogs' } }}>
    Lorem ipsum dolor sit amet.
    <Link to="/grf">Go!</Link>
  </PageWrapper>
);
