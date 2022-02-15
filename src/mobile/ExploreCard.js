import React from 'react';
import Workout from './Workout-bro.svg';
import './Explore.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BottomNav from './BottomNav';

function ExploreCard() {
    return (
        <>
            <main>
                <div className='card'>
                    <Accordion sx={{ background: '#FFEBB5' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <div className='card-content'>
                                <p>tag: shoulder</p>
                                <h3>Exercise Title</h3>
                                <h6>Lorem ipsum dolor sit amet, view description</h6>
                            </div>
                            <div className='card-image'>
                                <img src={Workout} alt='image' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='card'>
                    <Accordion sx={{ background: '#FFD0CF' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <div className='card-content'>
                                <p>tag: shoulder</p>
                                <h3>Exercise Title</h3>
                                <h6>Lorem ipsum dolor sit amet, view description</h6>
                            </div>
                            <div className='card-image'>
                                <img src={Workout} alt='image' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <BottomNav />
            </main>
        </>
    )
}

export default ExploreCard;
