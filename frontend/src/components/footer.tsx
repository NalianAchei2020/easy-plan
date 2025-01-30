import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-[14px]">
        <div className="mb-4 md:mb-0">
          <span>@ EasyPlan All Rights Reserved</span>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <Link to="/about" className="text-white hover:text-[#1447FB]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-[#1447FB]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Help" className="text-white hover:text-[#1447FB]">
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-condition"
                className="text-white hover:text-[#1447FB]"
              >
                Terms and Condition
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-white hover:text-[#1447FB]"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
