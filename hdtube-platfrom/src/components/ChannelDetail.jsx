import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [videos,setVideos]=useState([]);
  const [channelDetail,setChannelDetail]=useState(null);
  const {id}=useParams();
  console.log(channelDetail);

useEffect(() => {
 fetchFromApi(`channels?part=snippet=${id}`)
 .then((data)=>setChannelDetail(data?.items[0]))

 fetchFromApi(`search?channelId=${id}&part=snippet&order=data`)
 .then((data)=>setVideos(data?.items));
} , [id])
  return (
    <Box minHeight="9 5vh">
    <Box>
      <div style={{
        height:'300px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
      }} />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
    </Box>
    <Box p={2} display="flex">
    <Box sx={{ mr: { sm: '100px' } }}/>
      <Videos videos={videos} />
    </Box>
  </Box>
  
  )
}

export default ChannelDetail