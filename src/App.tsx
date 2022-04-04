import React from 'react';
import { MainContainer } from './pages/MainContainer';
import { Resume } from './components/Resume';
import { Navigation } from './routes/Navigation';

const App: React.FC = () => {
  return (
    <>
    <Navigation />
    </>
    // <div className="app">|
    //   <MainContainer/>
    // </div>
  );
}

export default App;
