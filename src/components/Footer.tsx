const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <div className="text-lg font-bold tracking-tight mb-2">
            <span className="text-gradient-peach">Peach</span>State Hacks
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 PeachState Hacks. Built by students, for students.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Discord
          </a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
