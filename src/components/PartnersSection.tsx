import { useEffect, useState } from "react";
import { fetchFromApi, API_BASE_URL } from "../lib/api";

type Partner = {
  id: number;
  name: string;
  logo_url: string;
  link: string | null;
};

const PartnersSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  // Extract base URL from API_BASE_URL (remove /api)
  const BACKEND_URL = API_BASE_URL.replace(/\/api$/, "");

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const response = await fetchFromApi<{ success: boolean; data: Partner[] }>("partners?is_active=1&per_page=100");
        if (response.success) {
          setPartners(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch partners:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPartners();
  }, []);

  const stats = [
    { value: "50+", label: "Educational Institutions" },
    { value: "100+", label: "Corporate Clients" },
    { value: "5+", label: "Years Excellence" },
  ];

  const getFullImageUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${BACKEND_URL}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl opacity-70" />

      <div className="container mx-auto relative">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Impact that speaks
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/70 to-foreground/50 bg-clip-text text-transparent">
            Our Clients&apos; Portfolio
          </h2>
          <p className="text-lg text-muted-foreground/85 max-w-3xl mx-auto">
            We are proud to have collaborated with diverse organizations, from prestigious educational 
            institutions to leading corporate brands, helping them scale and succeed.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <div className="relative mb-24 w-full overflow-hidden group">
            <div className="flex w-fit animate-marquee gap-8 py-8 px-4 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex h-32 w-56 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-lg shadow-[0_15px_35px_-15px_rgba(16,28,70,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_-15px_rgba(20,40,90,0.5)]"
                >
                  {partner.link ? (
                    <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <div className="h-20 w-full flex items-center justify-center">
                        <img
                          src={getFullImageUrl(partner.logo_url)}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                             (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff&size=128`;
                          }}
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="w-full">
                      <div className="h-20 w-full flex items-center justify-center">
                        <img
                          src={getFullImageUrl(partner.logo_url)}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                             (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff&size=128`;
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {partners.length === 0 && (
                <div className="w-full py-20 text-center text-muted-foreground">
                  No clients to display yet.
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-card/40 p-6 text-center backdrop-blur-md shadow-inner shadow-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
