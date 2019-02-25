import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout pageType="page" pageData={{ page: { title: 'Ducks & Dogs' } }}>
    Lorem ipsum dolor sit amet.
    <Link to="/grf">Go!</Link>
  </Layout>
);
