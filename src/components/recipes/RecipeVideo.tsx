import React from 'react';

const RecipeVideo = () => {
  return (
    <div>
      <iframe
        className="rounded-[2rem] videoM"
        src="https://www.youtube.com/embed/wyXnoeJoKLw?si=7Ezyvgg6Hyhekp3G"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default RecipeVideo;
