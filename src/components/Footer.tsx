const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-light tracking-wide">
          © 2026 PeachState Hacks
        </p>

        <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
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
