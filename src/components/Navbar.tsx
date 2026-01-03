const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="text-lg font-display font-semibold tracking-tight">
          PeachState
        </a>

        <a
          href="#register"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
