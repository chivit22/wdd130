import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ArticleBody from "@/components/ArticleBody";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" id="top">
      <TopBar />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ArticleBody />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
