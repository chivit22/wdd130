import { Twitter, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground">
      <div className="container flex items-center justify-end gap-1 py-2 text-sm">
        <span className="mr-2 text-muted-foreground text-xs">Follow us on</span>
        {[
          { Icon: Twitter, href: "https://x.com/chivit_Eth", external: true },
          { Icon: Mail, href: "mailto:chivitchivit22@gmail.com", external: false },
        ].map(({ Icon, href, external }, i) => (
          <a
            key={i}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="p-1.5 hover:opacity-70 transition-opacity"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
