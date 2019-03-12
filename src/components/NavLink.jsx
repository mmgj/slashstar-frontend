import React from 'react';
import { linkBuilder } from '../lib/helpers/sanity-helpers';
import PropTypes from 'prop-types';


const NavLink = ({ item }) => {
  return (
    <>
      {linkBuilder(item)}
    </>
  );
};

NavLink.propTypes = {
};

export default NavLink;
