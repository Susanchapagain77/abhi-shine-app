import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { fetchFromApi } from "@/lib/api";

type LegalPage = {
  id: number;
  title: string;
  content: string;
  published_at: string | null;
};

type ApiResponse = {
  success: boolean;
  data: LegalPage;
};

export default function PrivacyPolicy() {
  const { data, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ["legal-page", "privacy"],
    queryFn: () => fetchFromApi<ApiResponse>("/legal-pages/privacy"),
    retry: false,
  });

  const page = data?.data;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto max-w-4xl px-4 py-28">
        {isLoading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 w-64 rounded bg-muted" />
            <div className="h-4 w-40 rounded bg-muted" />
            <div className="mt-8 space-y-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-4 rounded bg-muted" style={{ width: `${70 + (i % 3) * 10}%` }} />
              ))}
            </div>
          </div>
        )}

        {!isLoading && (isError || !page) && (
          <div className="py-16 text-center">
            <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">This page is currently being updated. Please check back soon.</p>
          </div>
        )}

        {!isLoading && page && (
          <>
            <h1 className="mb-2 text-3xl font-bold">{page.title}</h1>
            {page.published_at && (
              <p className="mb-8 text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date(page.published_at).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            <div
              className="prose prose-sm max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
