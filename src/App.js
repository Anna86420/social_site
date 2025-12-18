import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Courses from './components/Courses/Courses';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/*" element={<Messages />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
