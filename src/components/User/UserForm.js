import React, { Component } from 'react'
import UserConsumer from '../../contexts/UserContext'

class UserForm extends Component {
    state = {
        formIsVisible: true, successAlert: false, alertMessage: ''
    }

    toggleFormVisibility = (e) => {
        this.setState(state => ({
            formIsVisible: !state.formIsVisible
        }));
    }

    changeState = (dispatch, e) => {
        dispatch({
            type: "SET_FORM_USER",
            payload: {
                [e.target.name]: e.target.value
            }
        });
    }

    addUser = (dispatch, form_user, e) => {
        dispatch({
            type: "ADD",
            payload: {}
        });

        this.clearForm(dispatch);
        this.setState({ successAlert: true, alertMessage: `${form_user.name} successfully added!` });
    }

    editUser = (dispatch, form_user, e) => {
        dispatch({
            type: "EDIT",
            payload: {}
        });

        this.setState({ name: '', age: '', job: '' });
        this.setState({ successAlert: true, alertMessage: `${form_user.name} successfully edited!` });
    }

    clearForm = (dispatch) => {
        dispatch({
            type: "CLEAR_FORM",
            payload: {}
        });
        this.setState({successAlert: false});
    }

    render() {
        const { formIsVisible, successAlert, alertMessage } = this.state;

        return (
            <div className="d-flex justify-content-center m-5">
                <div className="card col col-md-4">
                    {
                        successAlert &&
                        <div className="alert alert-success" role="alert">
                            {alertMessage}
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
                            <UserConsumer>
                                {
                                    value => {
                                        const { form_user, dispatch } = value;
                                        return (
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="name-input" className="form-label">Full Name</label>
                                                    <input type="text" value={form_user.name} className="form-control" id="name-input" name="name" onChange={this.changeState.bind(this, dispatch)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="age-input" className="form-label">Age</label>
                                                    <input type="number" value={form_user.age} className="form-control" id="age-input" name="age" onChange={this.changeState.bind(this, dispatch)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="job-input" className="form-label">Job</label>
                                                    <input type="text" value={form_user.job} className="form-control" id="job-input" name="job" onChange={this.changeState.bind(this, dispatch)} />
                                                </div>
                                                {
                                                    form_user.id === null ?
                                                        <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this, dispatch, form_user)}>Add</button>
                                                        :
                                                        <div>
                                                            <button type="button" className="btn btn-success" onClick={this.editUser.bind(this, dispatch, form_user)}>Edit</button>
                                                            <button type="button" className="btn btn-secondary btn-sm float-end" onClick={this.clearForm.bind(this, dispatch)}>Clear</button>
                                                        </div>
                                                }

                                            </form>
                                        );
                                    }
                                }
                            </UserConsumer>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default UserForm;