// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/catalogo" className="text-white">Catálogo</Link>
          <Link to="/servicios" className="text-white">Servicios</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
