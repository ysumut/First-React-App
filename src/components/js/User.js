import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../../contexts/UserContext'

class User extends Component {
    state = {

    }

    removeUser = (dispatch, e) => {
        const { id } = this.props;
        dispatch({
            type: "DELETE",
            payload: { id }
        })
    }

    render() {
        const { id, name, age } = this.props;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-3" >
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <p className="card-title"><b>ID: </b>{id}</p>
                                        <button className="btn btn-danger btn-sm" onClick={this.removeUser.bind(this, dispatch)}>Kaldır</button>
                                    </div>
                                    <div className="card-body">
                                        <p><b>İsim: </b>{name}</p>
                                        <p><b>Yaş: </b> {age}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer >
        );
    }
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    name: PropTypes.string
}

User.defaultProps = {
    name: 'Kullanıcı Adı'
}

export default User;