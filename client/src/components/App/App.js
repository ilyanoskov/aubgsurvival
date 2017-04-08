import React from 'react';
import FlashMessagesList from '../flash/FlashMessagesList';
import NavigationBar from '../common/Header';
import Rules from '../common/Rules';
import Jumbotrons from '../common/Jumbotron';

class App extends React.Component {
  render() {
    return (
      <div className="b">
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
