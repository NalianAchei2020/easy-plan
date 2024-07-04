import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <header className="flex flex-row bg-black text-white justify-between">
      <div className="py-8 px-4 text-[14px]">
        <span>@ EasyPlan All Rights Reserved</span>
      </div>
      <div>
        <ul className="flex flex-row gap-4 py-8 px-4 text-[14px]">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Help">Help</Link>
          </li>
          <li>
            <Link to="terms-and-condition">Terms and Condition</Link>
          </li>
          <li>
            <Link to="privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Footer;
