import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white-50 py-8 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img className="h-10 w-50" src="LOGO 1.png" />
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-[15px] text-[500]">
          <Link to="/features" className="text-gray-700">
            Features
          </Link>
          <Link to="/templates" className="text-gray-700">
            Templates
          </Link>
          <Link to="/blog" className="text-gray-700">
            Blog
          </Link>
          <Link to="/help-center" className="text-gray-700">
            Help Center
          </Link>
        </nav>
        <div className="login-signup">
          <Link
            to="/login"
            className="text-gray-700 px-4 font-[500]  hover:text-[#1447FB]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 rounded hover:text-white hover:bg-[#1447FB]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
