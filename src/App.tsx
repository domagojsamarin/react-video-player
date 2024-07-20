import { useState, useEffect } from 'react';
import fetchVideos from './api/mockVideoService';
import { Video } from './types/dataTypes';

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
  }

  return (
    <>
      {videos.filter((video) => video.id === selectedVideoId).map((video) => (
        <div key={video.id}>
          <video controls>
            <source src={video.videoUrl} type={video.videoType} />
            <track src={video.captionUrl} kind="captions" />
          </video>
        </div>
      ))}
      {videos.map((video) => (
        <div key={video.id}>
          <button onClick={() => handleVideoSelect(video.id)}>{video.title}</button>
        </div>
      ))}
    </>
  );
};

export default App
