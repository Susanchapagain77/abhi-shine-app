import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { fetchFromApi, PaginatedResponse, buildAssetUrl } from "@/lib/api";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

type GalleryPhoto = {
  id: number;
  photo_path: string | null;
  photo_url?: string | null;
  caption?: string | null;
};

type GalleryItem = {
  id: number;
  title: string;
  description: string | null;
  option: string | null;
  media_type: "image_group" | "youtube";
  youtube_url: string | null;
  photos: GalleryPhoto[];
  created_at?: string;
};

const getYouTubeId = (url: string | null) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getYouTubeThumbnail = (url: string | null) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};

const photoUrl = (photo: GalleryPhoto | undefined) =>
  photo ? (photo.photo_url || buildAssetUrl(photo.photo_path)) : '';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    photos: GalleryPhoto[];
    activeIndex: number;
    isVideo: boolean;
    youtubeUrl: string | null;
  }>({
    isOpen: false,
    photos: [],
    activeIndex: 0,
    isVideo: false,
    youtubeUrl: null,
  });

  const { data, isLoading, isError, refetch } = useQuery<PaginatedResponse<GalleryItem>>({
    queryKey: ["group-gallery"],
    queryFn: () => fetchFromApi<PaginatedResponse<GalleryItem>>("/galleries?option=Abhidh%20Group&per_page=50"),
  });

  const galleries = data?.data ?? [];

  const categories = useMemo(() => {
    const unique = new Map<string, string>();
    unique.set("all", "All");
    unique.set("image_group", "Photos");
    unique.set("youtube", "Videos");
    return Array.from(unique.entries()).map(([id, label]) => ({ id, label }));
  }, []);

  const filteredGalleries =
    activeFilter === "all"
      ? galleries
      : galleries.filter((g) => g.media_type === activeFilter);

  const openLightbox = (
    photos: GalleryPhoto[],
    index: number,
    isVideo = false,
    youtubeUrl: string | null = null
  ) => setLightbox({ isOpen: true, photos, activeIndex: index, isVideo, youtubeUrl });

  const closeLightbox = () => setLightbox((p) => ({ ...p, isOpen: false }));

  const nextPhoto = (e: { stopPropagation(): void }) => {
    e.stopPropagation();
    setLightbox((p) => ({ ...p, activeIndex: (p.activeIndex + 1) % p.photos.length }));
  };

  const prevPhoto = (e: { stopPropagation(): void }) => {
    e.stopPropagation();
    setLightbox((p) => ({
      ...p,
      activeIndex: (p.activeIndex - 1 + p.photos.length) % p.photos.length,
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
        <div className="container relative mx-auto px-6 text-center lg:px-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Our Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Moments, milestones, and memories from Abhidh Group.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur-md py-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-3 px-6">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {isError && (
            <div className="mx-auto max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-8 text-center">
              <p className="font-semibold text-destructive">Unable to load gallery</p>
              <button
                type="button"
                className="mt-4 text-sm text-primary hover:underline"
                onClick={() => refetch()}
              >
                Try again
              </button>
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-80 animate-pulse rounded-2xl border border-border bg-muted"
                />
              ))}
            </div>
          ) : filteredGalleries.length === 0 && !isError ? (
            <div className="py-20 text-center">
              <ImageIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
              <p className="text-muted-foreground">No gallery items found.</p>
              {activeFilter !== "all" && (
                <button
                  type="button"
                  className="mt-2 text-sm text-primary hover:underline"
                  onClick={() => setActiveFilter("all")}
                >
                  Show all
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGalleries.map((gallery) => {
                const isVideo = gallery.media_type === "youtube";
                const cover = gallery.photos?.[0];
                const coverSrc = isVideo
                  ? (getYouTubeThumbnail(gallery.youtube_url) ?? '')
                  : photoUrl(cover);

                return (
                  <div
                    key={gallery.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Cover image */}
                    <div
                      className="relative aspect-video cursor-pointer overflow-hidden"
                      onClick={() => {
                        if (isVideo && gallery.youtube_url) {
                          openLightbox([], 0, true, gallery.youtube_url);
                        } else if (gallery.photos?.length) {
                          openLightbox(gallery.photos, 0);
                        }
                      }}
                    >
                      {coverSrc ? (
                        <img
                          src={coverSrc}
                          alt={cover?.caption ?? gallery.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            target.nextElementSibling?.removeAttribute('hidden');
                          }}
                        />
                      ) : null}
                      <div
                        hidden={!!coverSrc}
                        className="flex h-full w-full items-center justify-center bg-muted"
                      >
                        <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
                      </div>

                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-primary transition-all">
                            <Play className="h-6 w-6 fill-white text-white" />
                          </div>
                        </div>
                      )}

                      {!isVideo && gallery.photos?.length > 0 && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                            <Maximize2 className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      )}

                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                          {isVideo ? <Play className="h-2.5 w-2.5" /> : <ImageIcon className="h-2.5 w-2.5" />}
                          {isVideo ? "Video" : "Photos"}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground line-clamp-1">{gallery.title}</h3>
                      {gallery.description && (
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {gallery.description.replace(/<[^>]*>/g, "")}
                        </p>
                      )}

                      {/* Thumbnails */}
                      {!isVideo && gallery.photos?.length > 1 && (
                        <div className="mt-3 flex gap-2">
                          {gallery.photos.slice(1, 5).map((photo, pIdx) => (
                            <div
                              key={photo.id}
                              className="relative h-10 w-10 cursor-zoom-in overflow-hidden rounded-lg border border-border transition hover:border-primary"
                              onClick={() => openLightbox(gallery.photos, pIdx + 1)}
                            >
                              <img
                                src={photoUrl(photo)}
                                className="h-full w-full object-cover opacity-80 hover:opacity-100 transition"
                                alt=""
                              />
                            </div>
                          ))}
                          {gallery.photos.length > 5 && (
                            <button
                              type="button"
                              aria-label={`View ${gallery.photos.length - 5} more photos`}
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-[10px] font-bold text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
                              onClick={() => openLightbox(gallery.photos, 5)}
                            >
                              +{gallery.photos.length - 5}
                            </button>
                          )}
                        </div>
                      )}

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11px] text-muted-foreground">
                          {gallery.created_at
                            ? new Date(gallery.created_at).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : ""}
                        </span>
                        <button
                          type="button"
                          className="text-xs font-medium text-primary hover:underline underline-offset-4"
                          onClick={() => {
                            if (isVideo && gallery.youtube_url) {
                              openLightbox([], 0, true, gallery.youtube_url);
                            } else if (gallery.photos?.length) {
                              openLightbox(gallery.photos, 0);
                            }
                          }}
                        >
                          {isVideo ? "Watch" : "View"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          {!lightbox.isVideo && lightbox.photos.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
                onClick={prevPhoto}
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
                onClick={nextPhoto}
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.isVideo ? (
              <div className="aspect-video w-full">
                <iframe
                  title="YouTube video player"
                  src={`https://www.youtube.com/embed/${getYouTubeId(lightbox.youtubeUrl)}?autoplay=1`}
                  className="h-full w-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <>
                <img
                  src={photoUrl(lightbox.photos[lightbox.activeIndex])}
                  alt={lightbox.photos[lightbox.activeIndex]?.caption || ""}
                  className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
                />
                {lightbox.photos[lightbox.activeIndex]?.caption && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-xl bg-black/60 px-5 py-2 text-sm text-white backdrop-blur">
                    {lightbox.photos[lightbox.activeIndex].caption}
                  </div>
                )}
                <div className="absolute bottom-4 right-8 text-xs font-mono text-white/40">
                  {lightbox.activeIndex + 1} / {lightbox.photos.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
