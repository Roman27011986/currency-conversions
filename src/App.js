import { Route, Switch } from 'react-router-dom';
import AppBar from "./components/AppBar";
import ConverterPage from './pages/ConverterPage';
import СurrentExchangeRatesPage from './pages/СurrentExchangeRatesPage';
import Container from './components/Container'

function App() {
  return (
    <>
     <AppBar />
        <Container>
           <Switch>
             <Route exact path='/' component={ConverterPage} />
             <Route path='/СurrentExchangeRatesPage' component={СurrentExchangeRatesPage} />
           </Switch>
        </Container>
    </>
  );
};     

export default App;
