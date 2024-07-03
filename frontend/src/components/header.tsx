import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white-50 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="flex items-center space-x-6">
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
          <Link to="/login" className="text-gray-700 px-4">
            Login
          </Link>
          <Link to="/signup" className="bg-black text-white px-4 py-2 rounded">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
