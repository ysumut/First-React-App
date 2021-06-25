import React, { Component } from 'react'

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const reducer = (action, state) => {
    switch (action.type) {
        case "DELETE":
            return {
                users: state.users.filter(item => item.id !== action.payload.id)
            }
        default:
            return { users: state.users };
    }
}

export class UserProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            dispatch: action => {
                this.setState(state => reducer(action, state));
            }
        }

        const userNames = ['Yusuf', 'Umut', 'Bulak', 'Mehmet', 'Uçar', 'Sinem', 'Gündüz', 'Yeşim', 'Bulut', 'Ahmet', 'Hamdi', 'Dağ', 'Nimet'];
        const userList = [];

        for (let i = 1; i <= 12; i++) {
            let rand_1 = Math.floor(Math.random() * userNames.length);
            let rand_2 = Math.floor(Math.random() * userNames.length);

            userList.push({
                id: i,
                name: userNames[rand_1] + ' ' + userNames[rand_2],
                age: Math.floor(Math.random() * 90) + 1
            });
        }

        this.state.users = userList;
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserConsumer;