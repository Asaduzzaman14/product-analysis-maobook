import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './comopnent/About/About';
import Blogs from './comopnent/Blogs/Blogs';
import Dashbord from './comopnent/Dashbord/Dashbord';
import Footer from './comopnent/Footer/Footer';
import Header from './comopnent/Header/Header';
import Home from './comopnent/Home/Home';
import NotFound from './comopnent/NotFound/NotFound';
import Reviews from './comopnent/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashbord' element={<Dashbord />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='*' element={< NotFound />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
