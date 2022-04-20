import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Notes from "./components/Notes";
import Login from "./components/Login"
import { SignUp } from "./components/SignUp";
import NoteState from './context/notes/NoteState';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
