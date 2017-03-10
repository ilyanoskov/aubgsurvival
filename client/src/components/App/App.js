import React from 'react';
import FlashMessagesList from '../flash/FlashMessagesList';
import NavigationBar from '../common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
