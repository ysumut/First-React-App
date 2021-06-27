import React, { Component } from 'react'

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const reducer = (action, state) => {
    switch (action.type) {
        case "DELETE":
            return {
                users: state.users.filter(item => item.id !== action.payload.id)
            }
        case "ADD":
            const users = state.users;
            const new_user = {
                id: users.length === 0 ? 1 : Math.max(...users.map(u => u.id)) + 1,
                ...action.payload
            }
            return { users: [...users, new_user] };
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

        const userList = [];
        const names = ['Yusuf', 'Umut', 'Bulak', 'Mehmet', 'Uçar', 'Sinem', 'Gündüz', 'Yeşim', 'Bulut', 'Ahmet', 'Hamdi', 'Dağ', 'Nimet'];
        const jobs = ['Engineer', 'Doctor', 'Artist', 'Teacher', 'Lawyer', 'Writer'];

        for (let i = 1; i <= 12; i++) {
            let rand_1 = Math.floor(Math.random() * names.length);
            let rand_2 = Math.floor(Math.random() * names.length);
            let rand_3 = Math.floor(Math.random() * jobs.length);

            userList.push({
                id: i,
                name: names[rand_1] + ' ' + names[rand_2],
                age: Math.floor(Math.random() * 90) + 1,
                job: jobs[rand_3]
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