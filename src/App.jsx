import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Results from './pages/Results'
import Shop from './pages/Shop'
import Signup from './pages/Signup'
import Update from './pages/Update'
import store from './store'
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
            <Route path="/results" element={<Results />}/>
            <Route path="/update" element={<Update />}/>
          </Routes>
        </main>
        <Footer/>
      </div>
      <ToastContainer/>
    </BrowserRouter>
  </Provider>
)
export default App