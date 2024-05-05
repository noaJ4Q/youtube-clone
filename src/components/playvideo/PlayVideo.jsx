import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import { Comment } from '../comment/Comment'

const comments = [
  {
    user: '',
    comment: '',
    likes: 0,
    dislikes: 0,
  }
]

export const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls></video>
      <h3>Video title</h3>
      <div className="play-video-info">
        <p>1234 Views &bull; 1 days ago</p>
        <div>
          <span><img src={like} alt="like-icon" />125</span>
          <span><img src={dislike} alt="dislike-icon" />2</span>
          <span><img src={share} alt="share-icon" />Share</span>
          <span><img src={save} alt="save-icon" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>channel</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel description</p>
        <p>Subscribe this channel to learn more about web development</p>
        <hr />
        <h4>130 comments</h4>
        {
          comments.map(comment => {
            return <Comment user={comment.user} days={comment.days} 
            comment={comment.comment} likes={comment.likes} 
            dislikes={comment.dislikes}/>
          })
        }
      </div>
    </div>
  )
}
