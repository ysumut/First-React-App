import '../css/App.css';
import UserConsumer, { UserProvider } from '../../contexts/UserContext';
import User from './User';

function App() {

  return (
    <UserProvider>
      <div className="container">
        <header>
          <h1>Kullanıcılar</h1>
          <div className="row">

            <UserConsumer>
              {
                value => {
                  const { users } = value; // get state from context
                  return (
                    users.map(item => {
                      return <User key={item.id} id={item.id} name={item.name} age={item.age} />
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