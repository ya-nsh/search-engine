import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Results from './components/Results';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('darkTheme');

    if (localTheme === 'true') {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme);
  }, [darkTheme]);

  const darkModeHandler = () => {
    setDarkTheme(darkTheme => !darkTheme);
  };

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-800 dark:text-gray-200 min-h-screen flex flex-col justify-between">
        <Navbar darkModeHandler={darkModeHandler} darkTheme={darkTheme} />
        <Routes>
          <Route path="/" element={<Search darkTheme={darkTheme} />} />

          <Route path="/search" element={<Results />} />
          <Route path="/image" element={<Results />} />
          <Route path="/news" element={<Results />} />
          <Route path="/videos" element={<Results />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>

        <Footer darkTheme={darkTheme} />
      </div>
    </div>
  );
}

export default App;
