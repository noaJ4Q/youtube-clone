import React from 'react';
import './Sidebar.css';

// icons
import homeIcon from '../../assets/home.png';
import gameIcon from '../../assets/game_icon.png';
import automobilesIcon from '../../assets/automobiles.png';
import sportsIcon from '../../assets/sports.png';
import entertainmentIcon from '../../assets/entertainment.png';
import techIcon from '../../assets/tech.png';
import musicIcon from '../../assets/music.png';
import blogsIcon from '../../assets/blogs.png';
import newsIcon from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

export const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={homeIcon} alt="home-icon" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={gameIcon} alt="game-icon" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobilesIcon} alt="automobiles-icon" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sportsIcon} alt="sports-icon" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainmentIcon} alt="entertainment-icon" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={techIcon} alt="tech-icon" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={musicIcon} alt="music-icon" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogsIcon} alt="blogs-icon" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={newsIcon} alt="news-icon" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscriptions</h3>
        <div className="side-link">
          <img src={jack} alt="pewdiepie-icon-channel" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="mrbeast-icon-channel" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="justinbieber-icon-channel" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="5minutescrafts-icon-channel" />
          <p>5-Minutes Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="nasdaily-icon-channel" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};
