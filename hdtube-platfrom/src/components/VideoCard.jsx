import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Typography,CardMedia,CardContent} from '@mui/material'
import { demoThumbnailUrl ,demoVideoUrl,demoVideoTitle,demoChannelTitle,demoChannelUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = ({video:{id:{videoId},snippet}}) => {
   

  return (
   <Card sx={{width:{md:'320px',xs:'100%'}, boxShadow:'none',borderRadius:0}}>
    <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{height:180,width:358}}
    />

    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',
        height:'106px'
    }}>
     <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color='#fff' >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray' >
            {snippet?.channelTitle || demoChannelTitle}

          
        </Typography>
        </Link>
    </CardContent> 
  )
}

export default VideoCard