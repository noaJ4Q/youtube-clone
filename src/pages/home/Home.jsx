import React from 'react'
import './Home.css'
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Home = ({sidebar}) => {
  return (
    <div>
        <Sidebar sidebar = {sidebar}/>
    </div>
  ) 
}
