import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 20;
  const apiKey=process.env.REACT_APP_API_KEY
  
  const [mode, setMode] = useState("light");
  const [progress, setProgressValue] = useState(0);
  

   const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light"); 
    }
  };

    const setProgress =(progress)=>{
    setProgressValue(progress);
  };

  
    return (

      <div className={mode === "dark" ? "dark-mode" : ""} >
        <BrowserRouter basename="/News-Monkey">
          <Navbar className={mode === "dark" ? "dark-mode" : ""} mode={mode} toggleMode={toggleMode} />

          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  export default App