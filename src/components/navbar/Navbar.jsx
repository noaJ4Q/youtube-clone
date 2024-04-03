import React from 'react';
import './Navbar.css';

// icons
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';
import uploadIcon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profileIcon from '../../assets/jack.png';

export const Navbar = ({setSidebar}) => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img onClick={()=>{setSidebar(prev => !prev)}} className="menu-icon" src={menuIcon} alt="menu-icon" />
                <img className="logo" src={logo} alt="logo" />
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={searchIcon} alt="search-icon" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={uploadIcon} alt="upload-icon" />
                <img src={moreIcon} alt="more-icon" />
                <img src={notificationIcon} alt="notification-icon" />
                <img
                    className="user-icon"
                    src={profileIcon}
                    alt="profile-icon"
                />
            </div>
        </nav>
    );
};
