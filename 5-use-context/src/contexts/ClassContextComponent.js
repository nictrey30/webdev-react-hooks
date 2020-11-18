import React, { Component } from 'react';
import { ThemeContext } from '../App';

class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      padding: '2rem',
      margin: '2rem'
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {/* takes a single function that it has the value of our Provider, and whatever the function returns it will render */}
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
