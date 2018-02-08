import React from 'react';

const ThemedDecorations = (props) => {
  const themedDecs = React.Children.map(props.children, child =>
    React.cloneElement(child, {
      className: props.theme,
    })
  )
  return(
    <div>
      {themedDecs}
    </div>
  )
}

export default ThemedDecorations;
