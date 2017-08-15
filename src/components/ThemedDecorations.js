// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component {
  render () {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      let theme = this.props.theme
      return React.cloneElement(child, {
        className: theme
      });
    });

    return (
      <div className="themed-decoration">
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
