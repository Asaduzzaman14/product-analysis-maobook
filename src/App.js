import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './comopnent/About/About';
import Blogs from './comopnent/Blogs/Blogs';
import Dashbord from './comopnent/Dashbord/Dashbord';
import Footer from './comopnent/Footer/Footer';
import Header from './comopnent/Header/Header';
import Home from './comopnent/Home/Home';
import NotFound from './comopnent/NotFound/NotFound';
import Reviews from './comopnent/Reviews/Reviews';


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

// rm -rf .git
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin এইজায়গাই আপনার রিপোজিটরি এর লিংক,(যেটি ক্লোন করার জন্য নিয়েছিলেন)
// git push -u origin main -f
// git remote add origin https://github.com/programming-hero-web-course-4/product-analysis-website-Asaduzzaman14.git
// git push -u origin main -f