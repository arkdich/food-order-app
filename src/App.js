import { Fragment } from 'react';
import { GlobalStyle } from './components/global/GlobalStyle';
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
