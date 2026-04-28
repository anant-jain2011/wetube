
import { ThumbsUp, ThumbsDown, Share2, Download, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { CompactVideoCard } from "@/components/VideoCard";
import { getVideo, getRelated } from "@/lib/videos";
import { useRouter } from "next/router";

// export const Route = createFileRoute("/watch/$videoId")({
//   loader: ({ params }) => {
//     const video = getVideo(params.videoId);
//     if (!video) throw notFound();
//     return { video, related: getRelated(params.videoId) };
//   },
//   head: ({ loaderData }) => ({
//     meta: loaderData
//       ? [
//         { title: `${loaderData.video?.title} — Streamly` },
//         { name: "description", content: loaderData.video?.description },
//         { property: "og:title", content: loaderData.video?.title },
//         { property: "og:description", content: loaderData.video?.description },
//         { property: "og:image", content: loaderData.video?.thumbnail },
//         { name: "twitter:image", content: loaderData.video?.thumbnail },
//       ]
//       : [],
//   }),
//   notFoundComponent: () => (
//     <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
//       <h1 className="text-4xl font-bold">Video not found</h1>
//       <Link href="/" className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Back home</Link>
//     </div>
//   ),
//   errorComponent: ({ error }) => (
//     <App>
//       <div className="p-8"><p className="text-destructive">{error.message}</p></div>
//     </App>
//   ),
//   component: Watch,
// });

export default function Watch() {
  const router = useRouter();
  const { videoId } = router.query;

  const [video, setVideo] = useState(null);
  const [related, setRel] = useState([]);

  useEffect(() => {
    if (!videoId) return;

    const v = getVideo(videoId);
    const r = getRelated(videoId);

    setVideo(v);
    setRel(r);
  }, [videoId]);

  const [expanded, setExpanded] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  if (!video) return <div className="p-6">Loading...</div>;

  return (
    <div className="mx-auto flex max-w-[1800px] flex-col gap-6 pt-4 xl:flex-row">
      <div className="min-w-0 flex-1">
        <div className="overflow-hidden rounded-2xl bg-black">
          <div className="relative aspect-video w-full">
            <img src={video?.thumbnail} alt={video?.title} className="h-full w-full object-cover opacity-90" />
            <button className="absolute inset-0 flex items-center justify-center" aria-label="Play">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 backdrop-blur transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-9 w-9 fill-primary-foreground"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </button>
          </div>
        </div>

        <h1 className="mt-4 text-xl font-bold leading-tight">{video?.title}</h1>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={video?.channelAvatar} alt={video?.channel} className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">{video?.channel}</p>
              <p className="text-xs text-muted-foreground">{video?.subscribers} subscribers</p>
            </div>
            <button
              onClick={() => setSubscribed((s) => !s)}
              className={`ml-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${subscribed ? "bg-secondary text-secondary-foreground" : "bg-foreground text-background hover:bg-foreground/90"}`}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center overflow-hidden rounded-full bg-secondary">
              <button className="flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-accent">
                <ThumbsUp className="h-4 w-4" /> {video?.likes}
              </button>
              <span className="h-6 w-px bg-border" />
              <button className="px-3 py-2 transition-colors hover:bg-accent" aria-label="Dislike">
                <ThumbsDown className="h-4 w-4" />
              </button>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm transition-colors hover:bg-accent">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm transition-colors hover:bg-accent">
              <Download className="h-4 w-4" /> Save
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-accent" aria-label="Bookmark">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          onClick={() => setExpanded((e) => !e)}
          className="mt-4 cursor-pointer rounded-xl bg-card p-4 text-sm"
        >
          <p className="font-medium">{video?.views} · {video?.age}</p>
          <p className={`mt-2 whitespace-pre-line text-muted-foreground ${expanded ? "" : "line-clamp-2"}`}>
            {video?.description}
          </p>
          <p className="mt-2 text-xs font-medium text-foreground">{expanded ? "Show less" : "Show more"}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">1,284 Comments</h2>
          <div className="mt-4 flex gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60" />
            <input placeholder="Add a comment..." className="flex-1 border-b border-border bg-transparent pb-2 text-sm outline-none focus:border-foreground" />
          </div>
          <div className="mt-6 space-y-5">
            {[
              { name: "@maya.designs", time: "2 days ago", text: "This is genuinely the best breakdown I've seen on the topic. Saved!" },
              { name: "@kenji_dev", time: "1 day ago", text: "The transition at 4:32 is buttery smooth. How did you do it?" },
              { name: "@artoflena", time: "6 hours ago", text: "More videos like this please 🙏" },
            ].map((c) => (
              <div key={c.name} className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-xs"><span className="font-semibold">{c.name}</span> <span className="text-muted-foreground">· {c.time}</span></p>
                  <p className="mt-1 text-sm">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-full shrink-0 space-y-3 xl:w-[400px]">
        {related.map((v) => <CompactVideoCard key={v.id} video={v} />)}
      </div> */}
    </div>
  );
}
