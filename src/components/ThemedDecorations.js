import React from 'react';
import PropTypes from 'prop-types';

const ThemedDecoration = (props) => {
  let themedChildren = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      className: props.theme,
    });
  });

  return(
    <div>
      {themedChildren}
    </div>
  )
}

// ThemedDecoration.defaultProps = {
//
// };
//
// ThemedDecoration.propTypes = {
//
// };

export default ThemedDecoration;
