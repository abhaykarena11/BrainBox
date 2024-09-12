import React from 'react';

function VideoSection({videoLink,currentVideo}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 ">
      <video controls autoPlay loop className="w-full h-96 rounded-lg">
        <source src={`${videoLink[currentVideo].URL}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;

// import React from "react";

// function VideoSection({ videoLink, currentVideo }) {
//   const videoId = videoLink[currentVideo].URL.split("v=")[1];
//   const autoplay = 1; // Autoplay on
//   const loop = 1; // Loop on
//   const playlist = videoId; // To loop the video

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6">
//       <iframe
//         width="100%"
//         height="384"
//          src="https://www.youtube.com/embed/snYu2JUqSWs?si=K1B_mzAFzW1UMg9B"
//         frameBorder="0"
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//         title="YouTube video player"
//         className="rounded-lg"
//       ></iframe>
//     </div>
//   );
// }

// export default VideoSection;

