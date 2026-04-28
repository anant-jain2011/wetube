// export type Video = {
//   id;
//   title;
//   channel;
//   channelAvatar;
//   views;
//   age;
//   duration;
//   thumbnail;
//   description;
//   likes;
//   subscribers;
// };

const thumb = (seed) => `https://picsum.photos/seed/${seed}/640/360`;
const avatar = (seed) => `https://i.pravatar.cc/80?u=${seed}`;

export const CATEGORIES = [
  "All", "Music", "Gaming", "Live", "Mixes", "News", "Podcasts",
  "Cooking", "Programming", "Design", "Travel", "Comedy", "Sports",
  "Fashion", "Recently uploaded", "Watched", "New to you",
];

export const VIDEOS = [
  { id: "v1", title: "Building a Modern Web App from Scratch in 2026", channel: "DevHorizon", channelAvatar: avatar("dev1"), views: "1.2M views", age: "2 days ago", duration: "14:32", thumbnail: thumb("v1"), description: "We build a full production-ready web app using the latest tools. Covering routing, state management, and deployment.", likes: "48K", subscribers: "892K" },
  { id: "v2", title: "Lofi Beats — Deep Focus Mix for Coding", channel: "Aurora Sounds", channelAvatar: avatar("dev2"), views: "8.4M views", age: "1 month ago", duration: "1:48:02", thumbnail: thumb("v2"), description: "A carefully curated mix of lofi beats to help you stay in the zone for hours.", likes: "320K", subscribers: "2.1M" },
  { id: "v3", title: "Why Tokyo Feels Like the Future", channel: "Wanderframe", channelAvatar: avatar("dev3"), views: "642K views", age: "5 days ago", duration: "22:18", thumbnail: thumb("v3"), description: "A cinematic walk through Shibuya, Shinjuku and the quieter corners of Tokyo.", likes: "29K", subscribers: "412K" },
  { id: "v4", title: "I Cooked the Perfect Steak 100 Times", channel: "Salt & Smoke", channelAvatar: avatar("dev4"), views: "3.1M views", age: "2 weeks ago", duration: "18:44", thumbnail: thumb("v4"), description: "After 100 attempts, here's what actually matters when cooking the perfect steak.", likes: "112K", subscribers: "1.4M" },
  { id: "v5", title: "The Hidden Math Behind Beautiful Design", channel: "Form & Function", channelAvatar: avatar("dev5"), views: "489K views", age: "3 weeks ago", duration: "11:09", thumbnail: thumb("v5"), description: "Golden ratio, modular scales, and the invisible grid of every great interface.", likes: "22K", subscribers: "284K" },
  { id: "v6", title: "Speedrunning a Game I've Never Played", channel: "PixelPanic", channelAvatar: avatar("dev6"), views: "2.7M views", age: "4 days ago", duration: "27:51", thumbnail: thumb("v6"), description: "Blind speedrun attempt — chaos guaranteed.", likes: "98K", subscribers: "1.8M" },
  { id: "v7", title: "How F1 Engineers Design a Front Wing", channel: "Apex Engineering", channelAvatar: avatar("dev7"), views: "915K views", age: "1 week ago", duration: "16:25", thumbnail: thumb("v7"), description: "A deep look at the aero philosophy behind the modern F1 front wing.", likes: "44K", subscribers: "612K" },
  { id: "v8", title: "Minimalist Apartment Tour — 38m² in Berlin", channel: "Quiet Spaces", channelAvatar: avatar("dev8"), views: "1.8M views", age: "1 month ago", duration: "9:12", thumbnail: thumb("v8"), description: "Touring a thoughtfully designed micro-apartment in Berlin Mitte.", likes: "76K", subscribers: "920K" },
  { id: "v9", title: "Every TypeScript Trick You Should Know", channel: "DevHorizon", channelAvatar: avatar("dev1"), views: "552K views", age: "6 days ago", duration: "31:07", thumbnail: thumb("v9"), description: "Generics, conditional types, template literals — the works.", likes: "38K", subscribers: "892K" },
  { id: "v10", title: "Sunrise Timelapse — Patagonia", channel: "Wanderframe", channelAvatar: avatar("dev3"), views: "204K views", age: "2 months ago", duration: "4:32", thumbnail: thumb("v10"), description: "Filmed over 11 mornings in southern Patagonia.", likes: "11K", subscribers: "412K" },
  { id: "v11", title: "Reacting to the Worst UI of All Time", channel: "Form & Function", channelAvatar: avatar("dev5"), views: "1.4M views", age: "3 days ago", duration: "19:48", thumbnail: thumb("v11"), description: "We dive into interfaces so bad they're almost art.", likes: "62K", subscribers: "284K" },
  { id: "v12", title: "Live: Building a Synth from Scratch", channel: "Aurora Sounds", channelAvatar: avatar("dev2"), views: "82K watching", age: "Streaming now", duration: "LIVE", thumbnail: thumb("v12"), description: "Modular synth build, live and unedited.", likes: "5.2K", subscribers: "2.1M" },
];

export const getVideo = (id) => VIDEOS.find(v => v.id === id);
export const getRelated = (id) => VIDEOS.filter(v => v.id !== id);
