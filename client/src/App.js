import { BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
      </BrowserRouter>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
