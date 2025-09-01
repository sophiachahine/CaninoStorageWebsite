import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 shadow-md">
          <ul className="flex space-x-6 text-white max-w-7xl mx-auto">
            <li><a href="/" className="hover:underline font-medium">Home</a></li>
            <li><a href="/about" className="hover:underline font-medium">About</a></li>
            <li><a href="/login" className="hover:underline font-medium">Login</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;