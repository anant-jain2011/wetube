import Link from "next/link";
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Music2, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast, Settings, Flag, HelpCircle } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

const main = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Compass, label: "Explore", to: "/" },
  { icon: PlaySquare, label: "Subscriptions", to: "/" },
];
const you = [
  { icon: Clock, label: "History", to: "/" },
  { icon: PlaySquare, label: "Your videos", to: "/" },
  { icon: ThumbsUp, label: "Liked videos", to: "/" },
];
const explore = [
  { icon: Music2, label: "Music", to: "/" },
  { icon: Gamepad2, label: "Gaming", to: "/" },
  { icon: Newspaper, label: "News", to: "/" },
  { icon: Trophy, label: "Sports", to: "/" },
  { icon: Lightbulb, label: "Learning", to: "/" },
  { icon: Shirt, label: "Fashion", to: "/" },
  { icon: Podcast, label: "Podcasts", to: "/" },
];
const more = [
  { icon: Settings, label: "Settings", to: "/" },
  { icon: Flag, label: "Report", to: "/" },
  { icon: HelpCircle, label: "Help", to: "/" },
];

function Section({ title, items }) {
  const location = usePathname();
  return (
    <div className="border-b border-border/60 px-3 py-3">
      {title && <h3 className="mb-1 px-3 text-sm font-semibold text-foreground">{title}</h3>}
      {items.map((item) => {
        const active = location === item.to && item.label === "Home";
        return (
          <Link
            key={item.label}
            href="/"
            className={`flex h-10 items-center gap-6 rounded-lg px-3 text-sm transition-colors hover:bg-accent ${active ? "bg-accent font-medium" : ""}`}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default function Sidebar({ open }) {
  if (!open) return null;
  return (
    <aside className="hidden w-60 shrink-0 overflow-y-auto pb-4 lg:block">
      <Section items={main} />
      <Section title="You" items={you} />
      <Section title="Explore" items={explore} />
      <Section items={more} />
      <p className="px-6 pt-4 text-xs text-muted-foreground">© 2026 Streamly</p>
    </aside>
  );
}

export function MiniSidebar() {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Compass, label: "Explore" },
    { icon: PlaySquare, label: "Subs" },
    { icon: Clock, label: "History" },
  ];
  return (
    <aside className="hidden w-20 shrink-0 lg:block">
      <div className="flex flex-col items-center gap-1 py-2">
        {items.map((item) => (
          <Link key={item.label} href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg transition-colors hover:bg-accent">
            <item.icon className="h-5 w-5" />
            <span className="text-[10px]">{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
