import React, { Component } from 'react'

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const reducer = (action, state) => {
    const { users, form_user } = state;

    switch (action.type) {
        case "ADD":
            const new_user = {
                id: users.length === 0 ? 1 : Math.max(...users.map(u => u.id)) + 1,
                name: form_user.name,
                age: parseInt(form_user.age),
                job: form_user.job
            }
            return { users: [...users, new_user] };
        case "SET_FORM_USER":
            return {
                form_user: { ...state.form_user, ...action.payload }
            }
        case "SET_EDIT_INFO":
            const id = action.payload.id;
            const { name, age, job } = users.find(item => item.id === id);
            return {
                form_user: { id, name, age, job }
            }
        case "EDIT":
            const edit_user = {
                name: form_user.name,
                age: parseInt(form_user.age),
                job: form_user.job
            }
            const index = users.findIndex(item => item.id === form_user.id);
            users[index] = { ...users[index], ...edit_user };

            return { users };
        case "DELETE":
            return {
                users: users.filter(item => item.id !== action.payload.id),
                form_user: { id: null, name: '', age: '', job: '' }
            }
        case "CLEAR_FORM":
            return {
                form_user: { id: null, name: '', age: '', job: '' }
            }
        default:
            return {};
    }
}

export class UserProvider extends Component {
    state = {
        users: [],
        form_user: { id: null, name: '', age: '', job: '' },
        dispatch: action => {
            this.setState(state => reducer(action, state));
        }
    }

    componentDidMount = () => {
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

        this.setState({ users: userList });
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