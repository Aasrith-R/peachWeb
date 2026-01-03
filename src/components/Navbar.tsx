const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-base font-display font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors duration-500"
        >
          PeachState
        </a>

        <a
          href="#register"
          className="text-sm font-medium text-primary/90 hover:text-primary transition-colors duration-500"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
