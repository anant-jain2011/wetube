import { VIDEOS } from "../lib/videos";
import {VideoCard} from "../components/VideoCard";
import CategoryChips from "../components/CategoryChips";
import Header from "../components/Header";
import { useState } from "react";
import Sidebar, { MiniSidebar } from "@/components/Sidebar";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Streamly — Watch what you love" },
//       { name: "description", content: "Discover music, gaming, learning and more on Streamly." },
//       { property: "og:title", content: "Streamly — Watch what you love" },
//       { property: "og:description", content: "Discover music, gaming, learning and more on Streamly." },
//     ],
//   }),
//   component: Home,
// });

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onToggleSidebar={() => setOpen((o) => !o)} />
      <div className="flex">
        {open ? <Sidebar open /> : <MiniSidebar />}
        <main className="min-w-0 flex-1 px-4 pb-12">
          <CategoryChips />
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 pt-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {VIDEOS.map((v) => <VideoCard key={v.id} video={v} />)}
          </div>
        </main>
      </div>
    </div>
  );
}
