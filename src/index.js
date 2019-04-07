import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>This is a dynamic greeting inside a React App</p>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));