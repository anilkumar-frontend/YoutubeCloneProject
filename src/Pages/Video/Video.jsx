import React from "react";
import "./Video.css";
import {Playvideo,Recomendation} from '../../index'
import { useParams } from "react-router-dom";

const Video = () => {
  const {videoId,categoryId} = useParams();
  return( 
    <div className="play-container">
      <Playvideo videoId = {videoId} />
      <Recomendation categoryId = {categoryId} />
    </div>
  );
};

export default Video;
