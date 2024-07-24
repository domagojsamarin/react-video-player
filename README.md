### Step 1: Project Setup

1. **Initialize Project**: Use Vite for a quick start.
2. **Try witouth Redux**
3. **Install Dependencies**:
   - Tailwind?

### Step 2: Directory Structure

Project directory:

```
/video-captions-sync
  /public
    /videos
      /video_1
        - clip.mp4
        - captions.srt
      /video_2
        - clip.mp4
        - captions.srt
  /src
    /components
      - VideoPlayer.tsx
      - CaptionsOverlay.tsx
      - Transcript.tsx
    /hooks
      - useVideoSync.ts
    /utils
      - parseSRT.ts
    - App.tsx
  - index.html
```

### Step 3: Implementation Details

- **VideoPlayer.tsx**: A component to render the video player. It should accept video source and caption files as props.
- **CaptionsOverlay.tsx**: A component to display captions over the video. It will use the current video time to determine which caption to show.
- **Transcript.tsx**: A component to display the video transcript. It should highlight the current section based on the video's playback time and allow users to click on a transcript time to seek the video to that time.
- **useVideoSync.ts**: A custom hook to manage the synchronization between the video playback and the transcript/captions display.
- **parseSRT.ts**: A utility function to parse SRT files into a usable format for your components.

### Step 4: Key Functionalities

1. **Parsing SRT Files**: Use `parseSRT.ts` to convert SRT files into JSON objects.
2. **Syncing Captions and Transcript**: Use `useVideoSync.ts` to manage the state of the current video time and update the captions and transcript accordingly.
3. **Interactive Transcript**: In `Transcript.tsx`, implement click-to-seek functionality by updating the video's current time when a transcript time is clicked.
4. **Styling Options**: Allow dynamic styling of captions through props in `CaptionsOverlay.tsx`, such as font size and background/text color.

### Step 5: Bonus Features

- **Generic Video and SRT Handling**: Components should handle any video and SRT file by making file paths and names dynamic props (API delicered info?).
- **Additional Features**: Implement additional features
  - adjustable playback speed
  - button to toggle captions on/off
  - dark mode for the transcript
  - variable caption size

### Step 6: Testing and Deployment

- **Local Testing**: Test each component individually and then as a whole to ensure synchronization works correctly.
- **Deployment**: Deploy to (maybe) Vercel or GitHub Pages.

### Step 7: Documentation and Sharing

- **README.md**: Write proper docs, how to run it locally, and any other relevant information.
- **Share on GitHub**
