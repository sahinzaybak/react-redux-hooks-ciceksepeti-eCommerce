import {Route} from 'react-router-dom';

//Pages
import productsPage from './pages/products.jsx'
import loginPage from './pages/login.jsx'
import Header from './layout/header.jsx';

//Global css
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss'

function App() {
  return (
    <div className="App">
      <Route path="/" render={(props) => (props.location.pathname !== "/") && <Header />}></Route>
      <Route exact path='/' component={loginPage}></Route>
    </div>
  );
}

export default App;
