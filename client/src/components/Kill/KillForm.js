import React from 'react';
import { connect } from 'react-redux';
import { kill } from '../../actions/kill';
import TextFieldGroup from '../common/TextFieldGroup';
import { hashHistory } from 'react-router';
import { addFlashMessage } from '../../actions/flashMessages.js';

class KillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .kill(this.state)
      .then(() => {
        hashHistory.push('/');
        this.props.addFlashMessage({ type: 'success', text: 'The kill was successfull!' });
      })
      .catch(res => {
        console.log(res);
        hashHistory.push('/');
        this.props.addFlashMessage({ type: 'error', text: 'Oops, something is wrong'});
      });
  }

  render() {
    const { code, errors, isLoading } = this.state;
    return (
      <div className="well">
        <form onSubmit={this.onSubmit}>
          <h2> Killed your Victim? </h2>
          <h4> Enter victim code below. </h4>

          <TextFieldGroup
            field="code"
            label="💀"
            name="code"
            value={code}
            onChange={this.onChange}
            errror={errors.title}
          />
          <button type="submit" className="btn btn-danger">
            {' '}
            Claim{' '}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { kill, addFlashMessage })(KillForm);
