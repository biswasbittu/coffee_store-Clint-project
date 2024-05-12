
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <nav className="bg-navbar-bg bg-cover bg-center h-16 flex items-center justify-center">
          {/* Navbar content */}
          <Link className="flex items-center">
            <img
              src="../../../public/more/logo1.png"
              alt=""
              className="h-12 mr-3"
            />

            <h1 className="text-white text-3xl">Espresso Emporium</h1>
          </Link>
        </nav>
      </div>
    );
};

export default Header;