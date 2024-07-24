import { useState, useEffect } from "react";
import { parseSRT } from "../utils/parseSRT";

const Transcript = ({ captionUrl }: { captionUrl: string }) => {
  const [subtitles, setSubtitles] = useState<any[]>([]);

  useEffect(() => {
    fetch(captionUrl)
      .then((response) => response.text())
      .then((srt) => {
        const parsedSubtitles = parseSRT(srt);
        setSubtitles(parsedSubtitles);
      })
      .catch((error) => console.error("Error fetching subtitles:", error));
  }, [captionUrl]);

  return (
    <div className="transcript">
      <h2>Transcript</h2>
      {subtitles.length > 0 ? (
        <ul>
          {subtitles.map((subtitle, index) => (
            <li key={index}>
              <p>
                {subtitle.startTime} - {subtitle.endTime}
              </p>
              <p>{subtitle.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No subtitles available.</p>
      )}
    </div>
  );
};

export default Transcript;
