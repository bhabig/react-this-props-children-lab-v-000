import React from 'react';

const Invitation = (props) => {
  return(
    <div>
      <h1>You've been invited!</h1>
      <h3>{props.children}</h3>
    </div>
  )
}

export default Invitation;
