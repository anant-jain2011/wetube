import {
  MdMenu,
  MdSearch,
  MdMic,
  MdNotifications,
  MdVideoCall,
  MdThumbUp,
  MdThumbDown,
  MdShare,
  MdDownload,
  MdMoreHoriz,
  MdPause,
  MdVolumeUp,
  MdSettings,
  MdFullscreen,
} from "react-icons/md";

const videos = Array(8).fill({
  title: "Nature's Miracle Mangrove Forests | Sundarbans",
  channel: "VibesOfNature",
  views: "2.4M views",
  time: "1 year ago",
  thumbnail:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s",
});

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <MdMenu size={26} />
          <h1 className="text-xl font-bold">WeTube</h1>
        </div>

        <div className="flex w-[45%] items-center">
          <input
            placeholder="Search"
            className="h-10 flex-1 rounded-l-full border px-4 outline-none"
          />

          <button className="flex h-10 w-16 items-center justify-center rounded-r-full border border-l-0 bg-gray-100">
            <MdSearch size={22} />
          </button>

          <button className="ml-3 rounded-full bg-gray-100 p-2">
            <MdMic size={22} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <MdVideoCall size={26} />
          <MdNotifications size={26} />

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">
            A
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="mx-auto flex max-w-[1800px] gap-6 px-6 py-4">
        {/* LEFT */}
        <div className="flex-1">
          {/* VIDEO PLAYER */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s"
              alt=""
              className="aspect-video w-full object-cover"
              onDrag={(e) => e.preventDefault}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              style={{
                userSelect: "none",
              }}
            />

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
              <div className="flex gap-4">
                <MdPause size={30} />
                <MdVolumeUp size={30} />
              </div>

              <div className="flex gap-4">
                <MdSettings size={24} />
                <MdFullscreen size={24} />
              </div>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-2xl font-bold">
            Nature's Miracle Mangrove Forests | Sundarbans | Vibes Of Nature
          </h1>

          {/* CHANNEL ROW */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://yt3.googleusercontent.com/7nPsd19AYxUnbcKoAqhFNSRyqr1OB8_mt0XZ-fTBWTw-Wv0Y9QY17t6lrTDzLg8c-aetSbNouQ=s176-c-k-c0x00ffffff-no-rj"
                className="h-10 w-10 rounded-full"
                draggable={false}
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              />

              <div>
                <h3 className="font-semibold">VibesOfNature</h3>
                <p className="text-sm text-gray-500">2.1M subscribers</p>
              </div>

              <button className="rounded-full border px-4 py-2">Join</button>

              <button className="rounded-full bg-black px-5 py-2 text-white">
                Subscribe
              </button>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                <MdThumbUp />
                298K
              </button>

              <button className="rounded-full bg-gray-100 p-2">
                <MdThumbDown />
              </button>

              <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                <MdShare />
                Share
              </button>

              <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                <MdDownload />
                Download
              </button>

              <button className="rounded-full bg-gray-100 p-2">
                <MdMoreHoriz />
              </button>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-4 rounded-2xl bg-gray-100 p-5">
            <p className="leading-relaxed">
              Have you ever gone deep into the forests? My scenes are very
              realistic, especially this time I brought a recording device. The
              sound of streams, waterfalls, birds, and insects creates an
              immersive forest experience.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-[420px]">
          <div className="flex gap-2 overflow-x-auto pb-3">
            {["All", "Nature", "Music", "Relaxing Music"].map((item) => (
              <button
                key={item}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {videos.map((video, index) => (
              <div key={index} className="flex gap-3">
                <img
                  src={video.thumbnail}
                  className="h-24 w-40 rounded-xl object-cover"
                  draggable={false}
                  style={{
                    userSelect: "none",
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />

                <div>
                  <h3 className="line-clamp-2 font-medium">{video.title}</h3>

                  <p className="mt-1 text-sm text-gray-600">{video.channel}</p>

                  <p className="text-sm text-gray-600">
                    {video.views} • {video.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
