import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Vides,ChannelCard} from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const {id}=useParams();
useEffect(() => {
 fetchFromApi(`channels?part=snippet=${id}`)
 .then((data)=>console.log(data))
} , [id])
  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail