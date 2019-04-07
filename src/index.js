import React from 'react';
import ReactDOM from 'react-dom';

/*eslint-disable no-unused-vars*/

class App extends React.Component {
render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>This is a dynamic greeting powered by React</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();