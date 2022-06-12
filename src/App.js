import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Routes from './routes/Routes';
// import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const darkModeHandler = () => {
    setDarkTheme(darkTheme => !darkTheme);
  };

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-800 dark:text-gray-200 min-h-screen flex flex-col justify-between">
        <Navbar darkModeHandler={darkModeHandler} darkTheme={darkTheme} />
        <Search darkTheme={darkTheme} />
        <Routes />
        <Footer darkTheme={darkTheme} />
      </div>
    </div>
  );
}

export default App;
