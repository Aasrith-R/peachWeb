import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-base font-display font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors duration-500"
        >
          PeachState
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground/60 font-light tracking-wide">
            <Link 
              to="/timeline" 
              className="hover:text-foreground/80 transition-colors duration-500"
            >
              Timeline
            </Link>
            <Link 
              to="/faq" 
              className="hover:text-foreground/80 transition-colors duration-500"
            >
              FAQ
            </Link>
          </div>
          
          {isHome ? (
            <a
              href="#register"
              className="text-sm font-medium text-primary/90 hover:text-primary transition-colors duration-500"
            >
              Register
            </a>
          ) : (
            <Link
              to="/#register"
              className="text-sm font-medium text-primary/90 hover:text-primary transition-colors duration-500"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
