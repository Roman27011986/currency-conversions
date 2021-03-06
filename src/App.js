import { Route, Switch } from 'react-router-dom';
import AppBar from "./components/AppBar";
import ConverterPage from './pages/ConverterPage';
import –°urrentExchangeRatesPage from './pages/–°urrentExchangeRatesPage';
import Container from './components/Container'

function App() {
  return (
    <>
     <AppBar />
        <Container>
           <Switch>
             <Route exact path='/' component={ConverterPage} />
             <Route path='/–°urrentExchangeRatesPage' component={–°urrentExchangeRatesPage} />
           </Switch>
        </Container>
    </>
  );
};     

export default App;
