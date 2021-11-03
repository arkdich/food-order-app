import { Fragment } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import NavBar from './components/navigation/NavBar';
import Header from './components/header/Header';
import ProductsWrapper from './components/products/ProductsWrapper';

function App() {
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
