// import logo from './logo.svg';
import './App.css';
import Footer from './default/footer/Index';

import Header from './default/header/Index';
import Features from './sections/Features';
import Home from './sections/Home';
import Trusted from './sections/Trusted';

function App() {
  return (
    <>
    <div className="relative min-h-screen-95 h-fit overflow-y-hidden">
      <Header/>
      <Home/>
      
    </div>
    <Trusted/>
    <Features/>

    <Footer/>
    </>
  );
}

export default App;
