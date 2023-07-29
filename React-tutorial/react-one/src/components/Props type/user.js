import React from 'react';
import PropTypes from 'prop-types';

const User = ({ personOne, personTwo }) => {
  return (
    <>
      <h1>{personOne}</h1>
      <h1>{personTwo}</h1>
    </>
  );
};

User.propTypes = {
  personOne: PropTypes.string.isRequired,
  personTwo: PropTypes.string.isRequired,
};

export default User;
