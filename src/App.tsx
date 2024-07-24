import { useState, useEffect } from "react";
import fetchVideos from "./api/mockVideoService";
import { Video } from "./types/dataTypes";
import VideoPlayer from "./components/VideoPlayer";
import CaptionsOverlay from "./components/CaptionsOverlay";
import Transcript from "./components/Transcript";

const App = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchVideos();
      console.log(videoData);
      setVideos(videoData);
      if (videoData.length > 0) {
        setSelectedVideoId(videoData[0].id);
      }
    };

    getVideos();
  }, []);

  const handleVideoSelect = (videoId: number) => {
    setSelectedVideoId(videoId);
  };

  return (
    <main className="grid grid-cols-[3fr_1fr] grid-rows-[auto_auto] auto-rows-auto gap-4 p-4">
      {VideoPlayer(videos, selectedVideoId)}
      {videos.find((video) => video.id === selectedVideoId) && (
        <CaptionsOverlay
          captionUrl={
            videos.find((video) => video.id === selectedVideoId)?.captionUrl ||
            ""
          }
        />
      )}
      <aside className="col-span-1 row-span-2 col-start-2 row-start-1 bg-slate-500 rounded-lg">
        <Transcript
          captionUrl={
            videos.find((video) => video.id === selectedVideoId)?.captionUrl ||
            ""
          }
        />
      </aside>
      <nav className="p-4 col-start-1 row-start-2">
        <div className="flex justify-evenly flex-wrap">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => handleVideoSelect(video.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            >
              {video.title}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
};

export default App;
