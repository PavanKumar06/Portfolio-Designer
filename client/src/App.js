import { BrowserRouter } from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Checkout />
      </BrowserRouter>
    </div>
  );
}

export default App;
