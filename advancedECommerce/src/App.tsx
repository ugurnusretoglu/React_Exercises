import { useDispatch } from 'react-redux';
import './App.css'
import Spinner from './components/Spinner';
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import type { ProductType, UserType } from './types/Types';
import productService from './services/ProductService';
import { setCurrentUser, setProducts } from './redux/appSlice';
import { useEffect } from 'react';
import { setBasket } from './redux/basketSlice';

function App() {

  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const products: ProductType[] = await productService.getAllProducts();
    dispatch(setProducts(products));
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  useEffect(() => {
    const currentUserString: string | null = localStorage.getItem("currentUser");
    if (currentUserString) {
      const currentUser: UserType = JSON.parse(currentUserString) as UserType;
      dispatch(setCurrentUser(currentUser));
    }
  }, [])

  useEffect(() => {
    const basketString = localStorage.getItem("basket");
    if (basketString) {
      const basket: ProductType[] = JSON.parse(basketString) as ProductType[]
      dispatch(setBasket(basket))
    }
  }, [])

  return (
    <div>
      <RouterConfig />
      <ToastContainer autoClose={2500} />
      <Spinner />
    </div>
  )
}

export default App
