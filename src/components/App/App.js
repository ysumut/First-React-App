import './App.css';
import UserConsumer, { UserProvider } from '../../contexts/UserContext';
import User from '../User/User';
import UserForm from '../User/UserForm';
import Clock from '../Clock/Clock';

function App() {

  return (
    <UserProvider>
      <div className="container">
        <header>
          <Clock />
          <UserForm />

          <div className="row">
            <UserConsumer>
              {
                value => {
                  const { users } = value; // get state from context
                  return (
                    users.map(item => {
                      return <User key={item.id} id={item.id} name={item.name} age={item.age} job={item.job} />
                    })
                  );
                }
              }
            </UserConsumer>
          </div>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;