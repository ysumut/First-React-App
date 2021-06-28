import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../../contexts/UserContext'

class User extends Component {
    state = {

    }

    setEditUser = (dispatch, e) => {
        const { id } = this.props;
        dispatch({
            type: "SET_EDIT_INFO",
            payload: { id }
        })
        window.scrollTo(0,0);
    }

    removeUser = (dispatch, e) => {
        const { id } = this.props;
        dispatch({
            type: "DELETE",
            payload: { id }
        })
    }

    render() {
        const { id, name, age, job } = this.props;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-3" >
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <p className="card-title"><b>ID: </b>{id}</p>
                                        <div className="btn-group" role="group">
                                            <button className="btn btn-outline-success btn-sm" onClick={this.setEditUser.bind(this, dispatch)}>Edit</button>
                                            <button className="btn btn-danger btn-sm" onClick={this.removeUser.bind(this, dispatch)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p><b>Full Name: </b>{name}</p>
                                        <p><b>Age: </b> {age}</p>
                                        <p><b>Job: </b> {job}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        );
    }
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    job: PropTypes.string
}

User.defaultProps = {
    name: 'Kullanıcı Adı',
    job: 'Unemployed'
}

export default User;