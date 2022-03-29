import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Friends from './component/Friends/Friends';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my router website</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='friends' element={<Friends />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
