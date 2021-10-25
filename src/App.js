import { Fragment } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import NavBar from './components/navigation/NavBar';
import Header from './components/header/Header';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <NavBar />
    </Fragment>
  );
}

export default App;
