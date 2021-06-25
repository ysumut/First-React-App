import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state = {
        isVisible: true
    }

    removeUser = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const { isVisible } = this.state;
        const { id, name, age } = this.props;

        let response = <div style={{ display: "none" }}></div>;
        if (isVisible) {
            response =
                <div className="col-3">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <p className="card-title"><b>ID: </b>{id}</p>
                            <button className="btn btn-danger btn-sm" onClick={this.removeUser}>Kaldır</button>
                        </div>
                        <div className="card-body">
                            <p><b>İsim: </b>{name}</p>
                            <p><b>Yaş: </b> {age}</p>
                        </div>
                    </div>
                </div>
        }
        return (
            response
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