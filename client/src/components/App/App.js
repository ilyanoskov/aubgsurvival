import React from 'react';
import FlashMessagesList from '../flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div className="">
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
