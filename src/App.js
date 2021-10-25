import { Fragment } from 'react';
import { GlobalStyle } from './components/globalStyle/GlobalStyle';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
    </Fragment>
  );
}

export default App;
