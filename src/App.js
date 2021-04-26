import {Route} from 'react-router-dom';
import { useHistory } from "react-router";

//Pages
import loginPage from './pages/login.jsx'
import Header from './components/shared/header.jsx'
import Footer from './components/shared/footer.jsx'
import productsPage from './pages/products.jsx'
import productDetailPage from './pages/product-detail.jsx'
import basketPage from './pages/basket.jsx'
import paymentPage from './pages/payment.jsx'
import previousOrder from './pages/previousOrder'
import notFound from './components/shared/notFound'

//Global css
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss'

let loginUserInfo
function App() {
  const history = useHistory();
  loginUserInfo = JSON.parse(localStorage.getItem("login"))
  return (
    <div className="App">
      {loginUserInfo == null && history.push("/giris")}
      <Route exact path='/giris' component={loginPage}></Route>
      <Route path="/" render={(props) => (props.location.pathname !== "/giris") && <Header /> }></Route> 
      <Route exact path='/' component={productsPage}></Route>
      <Route exact path='/urunler' component={productsPage}></Route>
      <Route exact path='/urunler/:slug' component={productDetailPage} ></Route>
      <Route exact path='/sepetim' component={basketPage}></Route>
      <Route exact path='/odeme' component={paymentPage}></Route>
      <Route exact path='/siparislerim' component={previousOrder}></Route>
      <Route path="/" render={(props) => (props.location.pathname !== "/giris") && <Footer /> }></Route>
    </div>
  );
}

export default App;
