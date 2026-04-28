import Link from "next/link";

export function VideoCard({ video }) {
  const isLive = video.duration === "LIVE";
  return (<main>
    <Link href={`/watch/${video.id}`} className="group flex flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
        <img src={video.thumbnail} alt={video.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
        <span className={`absolute bottom-2 right-2 rounded-md px-1.5 py-0.5 text-xs font-medium ${isLive ? "bg-primary text-primary-foreground" : "bg-black/80 text-white"}`}>
          {video.duration}
        </span>
      </div>
      <div className="flex gap-3">
        <img src={video.channelAvatar} alt={video.channel} className="h-9 w-9 shrink-0 rounded-full" />
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{video.title}</h3>
          <p className="mt-1 truncate text-xs text-muted-foreground">{video.channel}</p>
          <p className="truncate text-xs text-muted-foreground">{video.views} · {video.age}</p>
        </div>
      </div>
    </Link></main>
  );
}

export function CompactVideoCard({ video }) {
  return (
    <Link href={`/watch/${video.id}`} className="group flex gap-2">
      <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-lg bg-muted">
        <img src={video.thumbnail} alt={video.title} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-[10px] font-medium text-white">{video.duration}</span>
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="line-clamp-2 text-sm font-medium leading-snug">{video.title}</h4>
        <p className="mt-1 truncate text-xs text-muted-foreground">{video.channel}</p>
        <p className="truncate text-xs text-muted-foreground">{video.views}</p>
      </div>
    </Link>
  );
}
