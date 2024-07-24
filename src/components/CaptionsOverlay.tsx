import React, { useEffect, useState } from "react";
import { parseSRT } from "../utils/parseSRT";

interface CaptionsOverlayProps {
  captionUrl: string;
}

const CaptionsOverlay: React.FC<CaptionsOverlayProps> = ({ captionUrl }) => {
  const [captions, setCaptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchAndParseCaptions = async () => {
      const parsedCaptions = await parseSRT(captionUrl);
      setCaptions(parsedCaptions);
    };

    fetchAndParseCaptions();
  }, [captionUrl]);

  return (
    <div>
      {captions.map((caption, index) => (
        <p key={index}>{caption}</p>
      ))}
    </div>
  );
};

export default CaptionsOverlay;
