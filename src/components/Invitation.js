import React from 'react';
import PropTypes from 'prop-types';

const Invitation = (props) => {
  return(
    <div>
      <h1>You've been invited!</h1>
      <div>{props.children}</div>
    </div>
  )
}

// Invitation.defaultProps = {
//
// };
//
// Invitation.propTypes = {
//
// };

export default Invitation;
