import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import Blog from './pages/blog';
import Helpcenter from './pages/helpcenter';
import Template from './pages/template';
import Features from './pages/Features';
import Signup from './pages/signup';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help-center" element={<Helpcenter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
