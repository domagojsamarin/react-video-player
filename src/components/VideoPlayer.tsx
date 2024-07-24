import { Video } from "../types/dataTypes";

const VideoPlayer = (videos: Video[], selectedVideoId: number | null) => {
  return (
    <div className="col-span-1 col-start-1 row-start-1 aspect-video flex align-middle justify-center bg-black rounded-lg overflow-hidden">
      {videos
        .filter((video) => video.id === selectedVideoId)
        .map((video) => (
          <video controls key={video.id}>
            <source src={video.videoUrl} type={video.videoType} />
            <track src={video.captionUrl} kind="captions" />
          </video>
        ))}
    </div>
  );
};

export default VideoPlayer;
