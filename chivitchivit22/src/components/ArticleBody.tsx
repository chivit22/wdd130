import exampleLaw from "@/assets/example-law.jpg";
import exampleFinance from "@/assets/example-finance.jpg";
import exampleYoga from "@/assets/example-yoga.jpg";
import exampleDental from "@/assets/example-dental.jpg";
import exampleGym from "@/assets/example-gym.jpg";
import exampleRealestate from "@/assets/example-realestate.jpg";
import exampleBakery from "@/assets/example-bakery.jpg";
import exampleAgency from "@/assets/example-agency.jpg";
import exampleImmigration from "@/assets/example-immigration.jpg";
import examplePilates from "@/assets/example-pilates.jpg";
import examplePediatric from "@/assets/example-pediatric.jpg";
import exampleArchitecture from "@/assets/example-architecture.jpg";
import exampleRestaurant from "@/assets/example-restaurant.jpg";
import exampleCoffee from "@/assets/example-coffee.jpg";
import examplePhotography from "@/assets/example-photography.jpg";

type Example = {
  num: number;
  title: string;
  image: string;
  description: string;
};

type Category = {
  title: string;
  intro: string;
  examples: Example[];
};

const categories: Category[] = [
  {
    title: "Law and Finance Business Website Design Examples",
    intro: "Law firms and accounting services need phone contacts that are easy to access, case studies for different services, and social proof. Since these websites are data-heavy, they follow a more minimalistic design approach.",
    examples: [
      {
        num: 1,
        title: "Sterling & Associates: Corporate Law Firm Website",
        image: exampleLaw,
        description: "This law firm features a bold hero with social proof through awards and memberships. The simple layout makes it very easy to navigate and find the service you're looking for.",
      },
      {
        num: 2,
        title: "GreenLedger: Accounting Firm Website",
        image: exampleFinance,
        description: "A professionally-designed accounting website with clean layouts, well-organized content, and detailed service cards that help users quickly understand the firm's offerings.",
      },
      {
        num: 3,
        title: "Pillar Legal: Immigration Law Firm Website",
        image: exampleImmigration,
        description: "A trustworthy immigration law website with a confident navy palette, attorney portraits, and a prominent free-consultation CTA that makes reaching out feel effortless.",
      },
    ],
  },
  {
    title: "Sports & Wellness Business Websites",
    intro: "Gyms, yoga studios, and fitness coaches require more visuals — images and video showcasing lessons, programs, and equipment. Free sample programs are always a big plus.",
    examples: [
      {
        num: 4,
        title: "Serenity Yoga: Studio & Classes Website",
        image: exampleYoga,
        description: "A serene yoga website with a clean color scheme and plenty of white space. It features smooth scroll animations, class schedules, and program details that communicate tranquility.",
      },
      {
        num: 5,
        title: "IronForge: Fitness Gym & Coaching Website",
        image: exampleGym,
        description: "This gym website uses a dark, energetic color scheme with bold typography. The homepage covers everything users need: programs, pricing, and a direct contact form.",
      },
      {
        num: 6,
        title: "BalancePoint: Boutique Pilates Studio Website",
        image: examplePilates,
        description: "A soft, feminine pilates studio website using blush pinks and refined serif type. Class schedules sit front and center, making it effortless to book your next session.",
      },
    ],
  },
  {
    title: "Medical Services Business Websites",
    intro: "Medical websites must present a professional image. Most keep the design clean with simple color schemes and appointment scheduling options accessible at all times.",
    examples: [
      {
        num: 7,
        title: "BrightSmile: Family Dental Services Website",
        image: exampleDental,
        description: "A clean modern dental website featuring real reviews from patients and an easy-to-find booking form. The light blue and white palette builds trust and professionalism.",
      },
      {
        num: 8,
        title: "LittleStars: Pediatric Clinic Website",
        image: examplePediatric,
        description: "A cheerful pediatric website filled with playful illustrations and warm yellow and teal accents. The booking flow is friendly, fast, and reassuring for parents.",
      },
    ],
  },
  {
    title: "Real Estate & Architecture Websites",
    intro: "Real estate websites communicate lifestyle rather than just selling properties. They focus on the final product and what the client's life could be, using rich visuals and immersive galleries.",
    examples: [
      {
        num: 9,
        title: "Luxe Estates: Premium Property Listings Website",
        image: exampleRealestate,
        description: "A luxury real estate website with a dark, elegant color scheme. The large hero image and integrated search bar make property browsing intuitive and visually striking.",
      },
      {
        num: 10,
        title: "Nordic Form: Architecture Studio Portfolio",
        image: exampleArchitecture,
        description: "A minimalist black-and-white architecture portfolio that lets the projects speak for themselves. Spacious typography and editorial layouts feel gallery-like and refined.",
      },
    ],
  },
  {
    title: "Food & Hospitality Business Websites",
    intro: "Restaurants, bakeries, and cafes use warm color palettes and appetizing photography. Menu accessibility and reservation options are key features.",
    examples: [
      {
        num: 11,
        title: "Golden Crust: Artisan Bakery & Café Website",
        image: exampleBakery,
        description: "This bakery website wraps you in warmth with its brown and cream palette. The hero showcases fresh pastries alongside easy menu access, creating an inviting digital storefront.",
      },
      {
        num: 12,
        title: "Trattoria Rosa: Italian Restaurant Website",
        image: exampleRestaurant,
        description: "A mouth-watering restaurant site that pairs rich red tones with full-bleed pasta photography. The reserve-a-table button is always in reach, turning visitors into guests.",
      },
      {
        num: 13,
        title: "Cevitus Coffee: Specialty Coffee Shop Website",
        image: exampleCoffee,
        description: "An inviting coffee shop website with hand-drawn illustrations and a cozy brown and cream palette. Menu and store hours sit just where you'd expect them.",
      },
    ],
  },
  {
    title: "Creative Agency & Design Studio Websites",
    intro: "Creative agencies have the freedom to push design boundaries. Bold typography, dark themes, and portfolio showcases are common, but the best ones balance creativity with usability.",
    examples: [
      {
        num: 14,
        title: "Pixel & Co: Creative Design Agency Website",
        image: exampleAgency,
        description: "A bold agency website with a dark background and oversized typography. The portfolio grid below the fold showcases recent work in an engaging, modern layout.",
      },
      {
        num: 15,
        title: "Elestode Studios: Photography Portfolio Website",
        image: examplePhotography,
        description: "A cinematic photography portfolio with a bold dark theme and an immersive sunset hero. The image grid below invites visitors to lose themselves in the work.",
      },
    ],
  },
];

const jumpLinks = categories.map((c) => c.title);

const ArticleBody = () => {
  return (
    <article className="bg-background">
      <div className="container max-w-3xl py-10">
        {/* Intro paragraph */}
        <p className="text-foreground leading-7 mb-6">
          If you own a small business, your website plays a huge role in your success. Not everyone is a web designer or has the budget to hire a digital studio — but here's the good news: you don't need to. All it takes is a clean website with easy navigation, accessible contacts, and tasteful visuals. That's why{" "}
          <strong>we gathered real-life small business website design examples that stay focused, clean, and easy to navigate.</strong>
        </p>

        <a href="#" className="text-category text-sm hover:underline">
          ← Back to Website Examples Hub
        </a>

        {/* Jump navigation */}
        <div className="mt-8 mb-10 border-t border-b border-border py-6">
          <h5 className="font-bold text-sm uppercase tracking-wide mb-3 text-foreground">Jump to:</h5>
          <ul className="space-y-1.5">
            {jumpLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-sm text-category hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-foreground leading-7 mb-12">
          Hopefully, these examples will inspire you to continue on your design journey with more ideas and excitement. Now let's dive right in.
        </p>

        {/* Category sections */}
        {categories.map((cat, ci) => (
          <section key={ci} id={`section-${ci}`} className="mb-16">
            <h3 className="font-heading text-2xl text-foreground mb-4">{cat.title}</h3>
            <p className="text-muted-foreground leading-7 mb-8">{cat.intro}</p>

            {cat.examples.map((ex) => (
              <div key={ex.num} className="mb-12">
                <h5 className="font-bold text-base text-foreground mb-4">
                  {ex.num}. {ex.title}
                </h5>
                <div
                  className="rounded-sm overflow-hidden border border-border mb-4 group cursor-pointer animate-float-slow"
                  style={{ animationDelay: `${(ex.num % 5) * 0.6}s` }}
                >
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={860}
                    height={512}
                  />
                </div>
                <p className="text-foreground leading-7">{ex.description}</p>
              </div>
            ))}

            <div className="flex items-center gap-4 text-sm mt-4">
              <a href="#" className="text-category hover:underline">
                ← See more Website Examples
              </a>
              <a href="#top" className="text-muted-foreground hover:text-foreground transition-colors">
                ↑ Back to top
              </a>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default ArticleBody;
