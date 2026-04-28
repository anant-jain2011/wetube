import React from "react";
import Link from "next/link";
import { Menu, Search, Mic, Video, Bell, User } from "lucide-react";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-4 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center gap-1.5">
          <span className="flex h-7 w-10 items-center justify-center rounded-md bg-primary">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary-foreground"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="text-xl font-semibold tracking-tight">Streamly</span>
        </Link>
      </div>

      <div className="flex max-w-2xl flex-1 items-center gap-2">
        <div className="flex h-10 flex-1 items-center overflow-hidden rounded-full border border-border bg-input/40 focus-within:border-ring">
          <input
            type="search"
            placeholder="Search"
            className="h-full flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button className="flex h-full w-16 items-center justify-center bg-secondary transition-colors hover:bg-accent" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
        </div>
        <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-accent sm:flex" aria-label="Voice search">
          <Mic className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <button className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent md:flex" aria-label="Create">
          <Video className="h-5 w-5" />
        </button>
        <button className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent md:flex" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </button>
        <button className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground" aria-label="Account">
          <User className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
