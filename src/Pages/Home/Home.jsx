import React, { useState } from 'react'
import './Home.css'
import {Sidebar , Feed} from '../../index'

const Home = ({sidebar}) => {

  const [category,setCategory] = useState(0);
  return (
    <div>
      <Sidebar sidebar = {sidebar} category = {category} setCategory = {setCategory}  />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category = {category} />
      </div>
    </div>
  )
}

export default Home