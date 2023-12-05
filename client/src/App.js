import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Checkout from './components/Checkout'
import Intro from "./components/Portfolio/Intro"
import Signup from './components/Signup'
import Success from './components/Success'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'

function App() {
  const {user} = useContext(AuthContext)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Checkout /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success/:subscriptionName" element={<Success />} />
        </Routes>
        <Intro />
      </Router>
    </div>
  );
}

export default App;
