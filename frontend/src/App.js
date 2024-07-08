import React from 'react';
import LeftSidebar from './Pages/LeftSidebar';
import Main from './Pages/Serverscreen';
import RightSidebar from './Pages/RightSidebar';
import "@fontsource/rajdhani";
import './styles/App.css';

const App = () =>{
    return (
      <div className="app">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    );
  };

export default App;
