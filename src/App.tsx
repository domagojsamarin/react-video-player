import { useState, useEffect } from 'react';
import fetchVideos from './api/mockVideoService';
import { Video } from './types/dataTypes';

const App = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchVideos();
      console.log(videoData);
      setVideos(videoData);
    };

    getVideos();
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <video controls>
            <source src={video.videoUrl} type={video.videoType} />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default App
