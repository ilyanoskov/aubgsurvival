import React from 'react';
import { connect } from 'react-redux';
import { kill } from '../../actions/kill';
import TextFieldGroup from '../common/TextFieldGroup';

class KillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            errors : {},
            isLoading : false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.name });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.kill(this.state);
    }

    render() {
        const { title, errors, isLoading } = this.state;

        return (
            <div className="jumbotron">
                <form onSubmit={this.onSubmit}>
                        <h2> Killed your Victim? </h2>
                        <h4> Enter victim code below. </h4>

                    <TextFieldGroup
                        field="title"
                        label="Kill"
                        name="title"
                        value={title}
                        onChange={this.onChange}
                        errror={errors.title}
                    />
                <button type="submit" className="btn btn-danger"> Kill </button>
                </form>
            </div>

        )
    }
}

KillForm.propTypes = {
    kill : React.PropTypes.func.isRequired
}

export default connect(null, { kill }) (KillForm);
