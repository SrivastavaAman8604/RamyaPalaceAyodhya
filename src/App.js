import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Banner from './Component/Banner';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';
import Header from './Component/Header';
import Room from './Component/Advantages';
import Tariff from './Component/Tariff';

function App() {
  return (
    <>
    <Router>
      <Header/>
      {/* <Banner/> */}
      <Routes>
      <Route path='/' element={<Banner/>}/>
        <Route path='/home' element={<Banner/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/advantages' element={<Room/>}/>
        <Route path='/ayodhya' element={<Blog/>}/>
        <Route path='/advantage' element={<Room/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/Prices' element={<Tariff/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>  
    </Router>
    
      {/* <Header/>
      <Banner/>
      <Footer/> */}
    </>
  );
}

export default App;
