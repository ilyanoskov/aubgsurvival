import React from 'react';
import KillForm from './KillForm';
import Header from '../common/Header';

class KillPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-offset-4 col-md-4">
              <KillForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KillPage;
