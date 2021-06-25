import '../css/App.css';
import User from './User';

function App() {

  return (
    <div className="container">
      <header>
        <h1>Kullanıcılar</h1>
        <div className="row">
          <User id={1} name='Yusuf Umut Bulak' age={20} />
          <User id={2} name='Mehmet Demir' age={35} />
          <User id={3} age={75} />
          <User id={4} age={50} />
        </div>

      </header>
    </div>
  );
}

export default App;