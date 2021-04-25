import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useHistory } from "react-router";

//Pages
import loginPage from './pages/login.jsx'
import Header from './components/shared/header.jsx'
import productsPage from './pages/products.jsx'
import productDetailPage from './pages/product-detail.jsx'
import basketPage from './pages/basket.jsx'
import paymentPage from './pages/payment.jsx'
import previousOrder from './pages/previousOrder'

//Global css
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss'

let loginUserInfo
function App() {
  const history = useHistory();
  loginUserInfo = JSON.parse(localStorage.getItem("login"))
  return (
    <div className="App">
      {loginUserInfo == null && history.push("/login")}

      <Route exact path='/login' component={loginPage}></Route>
      <Route path="/" render={(props) => (props.location.pathname !== "/login") && <Header />}></Route>
      <Route exact path='/products' component={productsPage}></Route>
      <Route exact path='/basket' component={basketPage}></Route>
      <Route exact path='/payment' component={paymentPage}></Route>
      <Route exact path='/siparislerim' component={previousOrder}></Route>
      <Route exact path='/detail/:slug' component={productDetailPage}></Route>
      
    </div>
  );
}

export default App;
