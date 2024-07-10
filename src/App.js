import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import store from './store'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  )
}
export default App