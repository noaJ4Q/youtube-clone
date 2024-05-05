import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

export const Feed = () => {

  const videos = [
    {
      thumbnail: thumbnail1,
      title: 'name 1',
      channel: 'channel 1',
      views: '1k',
      days: '1' 
    },
    {
      thumbnail: thumbnail2,
      title: 'name 2',
      channel: 'channel 2',
      views: '2k',
      days: '2' 
    },
    {
      thumbnail: thumbnail3,
      title: 'name 3',
      channel: 'channel 3',
      views: '3k',
      days: '3' 
    },
    {
      thumbnail: thumbnail4,
      title: 'name 4',
      channel: 'channel 4',
      views: '4k',
      days: '4' 
    },
    {
      thumbnail: thumbnail5,
      title: 'name 5',
      channel: 'channel 5',
      views: '5k',
      days: '5' 
    },
    {
      thumbnail: thumbnail6,
      title: 'name 6',
      channel: 'channel 6',
      views: '6k',
      days: '6' 
    },
    {
      thumbnail: thumbnail7,
      title: 'name 7',
      channel: 'channel 7',
      views: '7k',
      days: '7' 
    },
    {
      thumbnail: thumbnail8,
      title: 'name 8',
      channel: 'channel 8',
      views: '8k',
      days: '8' 
    }
  ]

  return (
    <div className='feed'>
      {videos.map((video, idx) => {
        return (
          <Link to={'video/20/' + idx} id={idx} className='card'>
            <img src={video.thumbnail} alt={'thumbnail'+idx} />
            <h2>{video.title}</h2>
            <h3>{video.channel}</h3>
            <p>{video.views + ' views'} &bull; {video.days + ' days ago'}</p>
          </Link>
        )
      })}
    </div>
  )
}
