import React from 'react';

const WatchLive = () =>{

const video='https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/predsjax.mp4?alt=media&token=264fb066-7d0c-499c-9f46-0fcd3bc55acb';
  return(
    <div className='card'>
      <h3 className='card-title text-center'>Watch Live</h3>
      <div className='embed-responsive embed-responsive-21by9'>
        <iframe src={video} alow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='Live'></iframe>
      </div>
    </div>
  );
};

export default WatchLive;
