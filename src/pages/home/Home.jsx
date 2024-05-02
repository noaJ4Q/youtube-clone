import React from 'react'
import './Home.css'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/Feed'

export const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar = {sidebar}/>
        <div className={`container ${sidebar ? '' : 'large-container'}`}>
          <Feed/>
        </div>
    </>
  ) 
}
