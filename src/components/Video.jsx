// src/components/Video.jsx
const Video = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 my-10 px-4">
      <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-purple-400">
        <video
          className="w-full h-auto"
          controls
          autoPlay
          muted
          loop
        
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
