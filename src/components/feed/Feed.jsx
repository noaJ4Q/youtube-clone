import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';

export const Feed = () => {

  const videos = [
    {
      thumbnail: thumbnail1,
      title: 'name 1',
      channel: 'channel 1',
      views: '1k',
      days: '2' 
    },
    {
      thumbnail: thumbnail2,
      title: 'name 2',
      channel: 'channel 2',
      views: '2k',
      days: '2' 
    }
  ]

  return (
    <div className='feed'>
      {videos.map((video, idx) => {
        return (
          <div id={idx} className='card'>
            <img src={video.thumbnail} alt={'thumbnail'+idx} />
            <h2>{video.title}</h2>
            <h3>{video.channel}</h3>
            <p>{video.views + 'views &bull; ' + video.days + 'days ago'}</p>
          </div>
        )
      })}
    </div>
  )
}
