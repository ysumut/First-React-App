import React, { Component } from 'react'
import UserConsumer from '../../contexts/UserContext'

class UserForm extends Component {
    state = {
        name: '', age: '', job: '', formIsVisible: true, successAlert: false
    }

    toggleFormVisibility = (e) => {
        this.setState(state => ({
            formIsVisible: !state.formIsVisible
        }));
    }

    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = (dispatch, e) => {
        const { name, age, job } = this.state;
        dispatch({
            type: "ADD",
            payload: {
                name,
                age: parseInt(age),
                job
            }
        });

        this.setState({ name: '', age: '', job: '', successAlert: true });
    }

    render() {
        const { name, age, job, formIsVisible, successAlert } = this.state;

        return (
            <div className="d-flex justify-content-center m-5">
                <div className="card col col-md-4">
                    {
                        successAlert &&
                        <div className="alert alert-success" role="alert">
                            User successfully added!
                        </div>
                    }
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title">User</h4>
                        <button className="btn btn-outline-secondary btn-sm" onClick={this.toggleFormVisibility}>
                            {formIsVisible ? 'v' : '^'}
                        </button>
                    </div>
                    {
                        formIsVisible &&
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name-input" className="form-label">Full Name</label>
                                    <input type="text" value={name} className="form-control" id="name-input" name="name" onChange={this.changeState} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age-input" className="form-label">Age</label>
                                    <input type="number" value={age} className="form-control" id="age-input" name="age" onChange={this.changeState} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="job-input" className="form-label">Job</label>
                                    <input type="text" value={job} className="form-control" id="job-input" name="job" onChange={this.changeState} />
                                </div>

                                <UserConsumer>
                                    {
                                        value => {
                                            const { dispatch } = value;
                                            return (
                                                <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this, dispatch)}>Add</button>
                                            );
                                        }
                                    }
                                </UserConsumer>
                            </form>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default UserForm;