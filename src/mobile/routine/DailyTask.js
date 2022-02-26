import React from 'react';
import '../Explore.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IconButton } from '@mui/material';

function DailyTask() {
    return (
        <>
            <div>
                <h1>daily tasks</h1>
            </div>
            <Card sx={{ minWidth: 275, background: '#d7e3fc' }}>
                <CardContent sx={{ padding: 1 }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Exercise tag
                    </Typography>
                    <Typography variant="h6" component="div">
                        Exercise Name/Title
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
                </CardContent>
                <CardActions sx={{ pt: 0 }}>
                    <Button size="small">Start Now</Button>
                    <IconButton><CheckCircleOutlineIcon fontSize='small' color="action" /></IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default DailyTask
