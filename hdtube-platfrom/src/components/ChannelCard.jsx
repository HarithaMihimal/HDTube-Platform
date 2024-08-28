import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import ChannelDetail from './ChannelDetail'
const ChannelCard = () => {
  return (
   <Box  sx={{boxShadow:'none',borderRadius:'20px'}}>
    <Link to={`/channel/${ChannelDetail?.id?.ChannelId}`}> 

    <CardContent
     sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'column',color:'#fff'}}>
    < CardMedia
    image= {ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
    alt={ChannelDetail?.snippet?.title}
    sx={{width:'180px',height:'180px',borderRadius:'50%', mb:2,border:'1px solid #e3e3e3'}}

    />

    <Typography variant='h6' >{ChannelDetail?.snippet?.title}
    <CheckCircle sx={{fontSize:14,color:'gray', ml:'5px'}}/>
      </Typography>
    </CardContent>
    </Link>
   
   

   </Box>
  )
}

export default ChannelCard