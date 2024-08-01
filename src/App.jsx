import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import store from './store'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Account from './pages/Account'
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/> 
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/account" element ={<Account/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
      <ToastContainer/>
    </BrowserRouter>
  </Provider>
)
export default App