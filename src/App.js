import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';

function App() {


  return (
    <>

      <div className='App'>
        <header>

        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
