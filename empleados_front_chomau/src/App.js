//import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Menu from './components/navbar/navbar';

import AppRouter from './components/routers/router';

function App() {
  return (
      <div className="App">
        <Menu />
        <AppRouter />
        {/* <Login/> */}
    </div>
  );
}

export default App;
