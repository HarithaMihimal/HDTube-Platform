import React from 'react'
import {Routes,Route,BrowserRouter}from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar/>
            <Routes>
                <Route path='/'  exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>   
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>

                {/* https://youtu.be/FHTbsZEJspU?si=5mi8_IOklD6R__Ub */}

            </Routes>
        </Box>
    </BrowserRouter>
)

export default App