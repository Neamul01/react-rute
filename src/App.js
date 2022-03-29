import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Friends from './component/Friends/Friends';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import FriendDetails from './component/Friends/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='friends' element={<Friends />}></Route>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Route path='friend/:friendId' element={<FriendDetails></FriendDetails>}></Route>
        </div>
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
