import { Fragment } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import NavBar from './components/navigation/NavBar';
import Header from './components/header/Header';
import ProductsWrapper from './components/products/ProductsWrapper';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './store/productsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <NavBar />
      <ProductsWrapper />
    </Fragment>
  );
}

export default App;
