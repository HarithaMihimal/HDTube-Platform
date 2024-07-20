import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Typography,CardMedia,CardContent} from '@mui/material'
import { demoThumbnailUrl ,demoVideoUrl,demoVideoTitle,demoChannelTitle,demoChannelUrl } from '../utils/constants'


const VideoCard = ({video:{id:{videoId},snippet}}) => {
   

  return (
   <Card>
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
        <Typography variant='body2' sx={{color:'white'}}>
            {snippet?.title.slice(0,60)}
        </Typography>
        </Link>
    </CardContent> 
    </Card>
  )
}

export default VideoCard