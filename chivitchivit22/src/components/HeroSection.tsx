import { MessageCircle, Twitter, Mail, Link as LinkIcon } from "lucide-react";
import heroCollage from "@/assets/hero-collage.jpg";

const shareLinks = [
  { icon: MessageCircle, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Mail, href: "mailto:chivitchivit22@gmail.com" },
  { icon: LinkIcon, href: "#" },
];

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img
              src={heroCollage}
              alt="Small Business Website Design Examples Collage"
              className="w-full rounded-sm animate-float-slow"
              width={860}
              height={540}
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="text-xs font-semibold uppercase tracking-widest text-category">
              Website Examples
            </a>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.8rem] leading-tight text-foreground">
              Small Business Website Design: 40 Real-Life Examples
            </h1>

            <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wide mt-2">
              <span>By <strong className="text-foreground">chivit 🚶🚶</strong></span>
              <span className="w-px h-3 bg-border" />
              <span>4 Years Ago</span>
            </div>

            <div className="flex items-center gap-2 mt-6">
              {shareLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
