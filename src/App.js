import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Friends from './component/Friends/Friends';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import FriendDetails from './component/Friends/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import Post from './component/Posts/Post/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='friends' element={<Friends />}></Route>
        <Route path='friend/:friendId' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<Post></Post>}></Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
