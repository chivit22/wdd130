const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground">
                <span className="text-primary font-heading text-sm font-bold">RG</span>
              </div>
              <span className="font-heading text-lg">Really Good Designs</span>
            </div>
            <p className="text-sm opacity-70 leading-6">
              Curating the best web design inspiration for designers, developers, and business owners.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Explore</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Website Examples", "Freebies", "Design Tips", "Agency Growth"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:opacity-100 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
                { label: "Twitter", href: "#" },
                { label: "WhatsApp", href: "https://wa.me/2348151284222" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-50">
          © 2024 Really Good Designs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
