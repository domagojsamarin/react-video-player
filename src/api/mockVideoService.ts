import mockVideoData from "./mockVideoData.json";

const fetchVideos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockVideoData;
};

export default fetchVideos;
