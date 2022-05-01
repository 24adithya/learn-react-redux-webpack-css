import React, {useState, useEffect, Component} from 'react';

import Home from './components/home';
import Login from './components/login';

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

import {HashRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import { Popover, Box, Card, Tab, Tabs, MenuItem } from '@mui/material';

import _ from 'lodash';

const AppContents = (props) => {

    const allTabs = ['/residential-home', '/login', '/downtown-home']
    const homeLabels= ['Residential', 'Downtown'];
    
    const [value, setValue] = useState(location.hash.substring(1));

    const [homeLabel, setHomeLabel] = useState(homeLabels[0]);
    const [homeTabAnchorEl, setHomeTabAncholEl] = useState(null);

    const [loginLabel, setLoginLabel] = useState('Login');

    const[ homeDropDownValue, setHomeDropDownValue] = useState(allTabs[0]);

    // const appStyles = userStyles();
    const history = require('history').createHashHistory();
    
    const homeDropDownLabels = ['/downtown', 'residential']

    const defaultPath = allTabs[0];

    const handleValueChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleHomeTabClick = (event) => {
        event.stopPropagation();
        setHomeTabAncholEl(event.currentTarget);
    }

    const handleHomeTabClose = () => {
        setHomeTabAncholEl(null);
    }

    const handleHomeMenuItemClick = (value, label) => {
        history.push(value);
        setHomeDropDownValue(value);
        setValue(value);
        setHomeLabel(label);
        handleHomeTabClose();
    }

    return(
        <Router>
        <Box>
        <Tabs value={value === '/' ? defaultPath : value}>
            <Tab label={homeLabel} value={homeDropDownValue} icon={<ArrowDropDown onClick={handleHomeTabClick}/>}
            component={Link} to={homeDropDownValue}>
                </Tab>
                <Tab  label={loginLabel} value={allTabs[1]} component={Link} to={allTabs[1]}>
                </Tab>
        </Tabs>

        <Popover
            open={!_.isNull(homeTabAnchorEl)}
            anchorEl={homeTabAnchorEl}
            anchorOrigin={{vertical:'top', horizontal: 'center'}}
        >

            <MenuItem onClick={() => handleHomeMenuItemClick(allTabs[0], homeLabels[0])}>
                {homeLabels[0]}
            </MenuItem>
            <MenuItem onClick={() => handleHomeMenuItemClick(allTabs[2], homeLabels[2])}>
                {homeLabels[2]}
            </MenuItem>

        </Popover>
        <Routes>
            {/* <Route path={allTabs.length} exact>
                <Navigate to={allTabs[0]}/>
            </Route> */}
            <Route path={allTabs[0]} exact render={() => <Home additionalParams={props.userDetails}/>} />
            <Route path={allTabs[1]} exact render={() => <Login additionalParams={props.userDetails}/>} />
        </Routes>
        </Box>
        </Router>
    );
}

export default AppContents;