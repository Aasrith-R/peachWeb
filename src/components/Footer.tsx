const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground/40 font-light tracking-wider">
          © 2026 PeachState Hacks
        </p>

        <div className="flex items-center gap-8 text-xs text-muted-foreground/40 font-light tracking-wider">
          <a href="#" className="hover:text-foreground/60 transition-colors duration-500">
            Instagram
          </a>
          <a href="#" className="hover:text-foreground/60 transition-colors duration-500">
            Discord
          </a>
          <a href="#" className="hover:text-foreground/60 transition-colors duration-500">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
