import React from 'react'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import user_profile from '../../assets/user_profile.jpg'

export const Comment = ({user, days, comment, likes, dislikes}) => {
  return (
    <div className='comment'>
      <img src={user_profile} alt="user-profile" />
      <div>
        <h3>{user}<span>{days} days ago</span></h3>
        <p>{comment}</p>
        <div className="comment-action">
          <img src={like} alt="like-icon" />
          <span>{likes}</span>
          <img src={dislike} alt="dislike-icon" />
          <span>{dislikes}</span>
        </div>
      </div>
    </div>
  )
}
