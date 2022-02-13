import { Box } from '@mui/system';
import React from 'react';
import BottomNav from './BottomNav';

function Home() {
    return (
        <div>
            <Box sx={{ width: 300, height: 300, backgroundColor: 'red' }}>

            </Box>
            <Box sx={{ width: 300, height: 300, backgroundColor: 'blue' }}>
            </Box>
            <Box sx={{ width: 300, height: 100, backgroundColor: 'green' }}>
            </Box>
            <BottomNav />
        </div>
    )
}

export default Home;
