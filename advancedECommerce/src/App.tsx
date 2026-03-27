import './App.css'
import Spinner from './components/Spinner';
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <RouterConfig />
      <ToastContainer autoClose={2500} />
      <Spinner />
    </div>
  )
}

export default App
