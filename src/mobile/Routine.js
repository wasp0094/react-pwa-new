import React from 'react';
import BottomNav from './BottomNav';

import DailyTask from './routine/DailyTask';
import Dashboard from './routine/Dashboard';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Routine() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {/* <div>
                <h1>routine</h1>
            </div> */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ position: "sticky", top: "0", width: "100%" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ background: '#fff' }}>
                        <Tab label="Daily Tasks" {...a11yProps(0)} />
                        <Tab label="Dashboard" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <DailyTask />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Dashboard />
                </TabPanel>
            </Box>
            <BottomNav />
        </>
    )
}

export default Routine

//will contain 2 embedded components: daily tasks + dashboard
