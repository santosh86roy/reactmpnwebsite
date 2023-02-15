import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Routes, Route,Switch } from 'react-router-dom'
import AboutUs from './components/AboutUS/AboutUs';
import MainPage from './components/MainPage/MainPage';
import ContactPage from './components/ContactPage/ContactPage';


function App() {
  return (
<>
<Router>

<Navbar/>
<Routes>
<Route path='/' element={<MainPage/>}></Route>
<Route path='/about' element={<AboutUs/>}></Route>
<Route path='/contact' element={<ContactPage/>}></Route>
</Routes>
<Footer/>
</Router>


</>

);
}

export default App;
