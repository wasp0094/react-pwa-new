import React from 'react';
import Workout from './Workout-bro.svg';
import './Explore.css';

import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import BottomNav from './BottomNav';
import { Link } from "react-router-dom";

function PhysioCard() {
    return (
        <>
            <main>
                <div className='main-card'>
                    <div className='active-card'>
                        <div className='card-content'>
                            <p>tag: shoulder</p>
                            <h3>Exercise Title</h3>
                            <h6>Lorem ipsum dolor sit amet, view description</h6>
                        </div>
                        <div className='card-image'>
                            <img src={Workout} alt='exercise' />
                        </div>
                    </div>
                    <Stack direction='row' spacing={2} ml={2} mr={2}>
                        <Button variant="contained" size='small' disableElevation className='btn'>Left</Button>
                        <Button variant="outlined" size='small' disableElevation className='btn'>Right</Button>
                    </Stack>
                </div>

                <div className='main-card'>
                    <div className='active-card'>
                        <div className='card-content'>
                            <p>tag: shoulder</p>
                            <h3>Exercise Title</h3>
                            <h6>Lorem ipsum dolor sit amet, view description</h6>
                        </div>
                        <div className='card-image'>
                            <img src={Workout} alt='exercise' />
                        </div>
                    </div>
                    <Stack direction='row' spacing={2} ml={2} mr={2}>
                        <Button variant="contained" size='small' disableElevation className='btn' component={Link} to='#' sx={{ width: '100%' }}>Start Now</Button>

                        {/* <Button variant="outlined" size='small' disableElevation className='btn'>Right</Button> */}
                    </Stack>
                </div>
                {/* <Link to='/profile'>Start Now</Link> */}
                <BottomNav />
            </main>
        </>
    )
}

export default PhysioCard
