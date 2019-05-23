import React from 'react';

const WatchLive = () =>{
const video = 'https://www.youtube.com/embed/2eIVHn2KP7Q';

  return(
    <div className='card'>
      <h3 className='card-title text-center'>Watch Live</h3>
      <div className='embed-responsive embed-responsive-21by9'>
        <iframe src={video} alow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='Live'></iframe>
      </div>
    </div>
  );
};

export default WatchLive;
