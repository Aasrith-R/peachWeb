const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-gradient-peach">Peach</span>State Hacks
        </a>

        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors duration-300">
            About
          </a>
          <a href="#categories" className="hover:text-foreground transition-colors duration-300">
            Categories
          </a>
          <a href="#details" className="hover:text-foreground transition-colors duration-300">
            Details
          </a>
        </div>

        {/* CTA */}
        <a
          href="#register"
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
