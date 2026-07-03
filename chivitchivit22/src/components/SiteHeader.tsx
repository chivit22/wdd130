import { Search } from "lucide-react";
import chivitLogo from "@/assets/chivit-logo.jpg";

const navLinks = ["Freebies", "Get Inspired", "Let's Design", "Grow an Agency"];

const SiteHeader = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <img src={chivitLogo} alt="Chivit" className="h-10 w-10 rounded-lg object-cover" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-foreground hover:text-category transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="p-2 hover:bg-secondary rounded-full transition-colors">
          <Search size={18} />
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
