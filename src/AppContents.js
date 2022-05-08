import React, {useState, useEffect, Component} from 'react';

import Home from './components/home';
import Login from './components/login';

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

import {Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Box, Tab, Tabs, MenuItem, AppBar } from '@mui/material';

import {StyledPopOver} from './styles/mainStyles';

import _ from 'lodash';

const AppContents = (props) => {

    const allTabs = ['/residential-home', '/login', '/downtown-home']
    const homeLabels= ['Residential', 'Downtown'];
    
    const [value, setValue] = useState(allTabs[0]);

    const [homeLabel, setHomeLabel] = useState(homeLabels[0]);
    const [homeTabAnchorEl, setHomeTabAnchorEl] = useState(null);

    const [loginLabel, setLoginLabel] = useState('Login');

    const[ homeDropDownValue, setHomeDropDownValue] = useState(allTabs[0]);

    const history = useNavigate();
    
    const defaultPath = allTabs[0];

    const handleValueChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleHomeTabClick = (event) => {
        event.stopPropagation();
        setHomeTabAnchorEl(event.currentTarget);
    }

    const handleHomeTabClose = () => {
        setHomeTabAnchorEl(null);
    }

    const handleHomeMenuItemClick = (value, label) => {
        history(value);
        setHomeDropDownValue(value);
        setValue(value);
        setHomeLabel(label);
        handleHomeTabClose();
    }

    return(
        <Box>
            
        <Tabs value={value === '/' ? defaultPath : value} onChange={handleValueChange}>
            <Tab label={homeLabel} value={homeDropDownValue} icon={<ArrowDropDown onClick={handleHomeTabClick}/>}
            component={Link} to={homeDropDownValue}>
                </Tab>
                <Tab  label={loginLabel} value={allTabs[1]} component={Link} to={allTabs[1]}>
                </Tab>
        </Tabs>
        

        <StyledPopOver
            open={!_.isNull(homeTabAnchorEl)}
            anchorEl={homeTabAnchorEl}
            anchorOrigin={{vertical:'left', horizontal: 'left'}}
        >

            <MenuItem onClick={() => handleHomeMenuItemClick(allTabs[0], homeLabels[0])}>
                {homeLabels[0]}
            </MenuItem>
            <MenuItem onClick={() => handleHomeMenuItemClick(allTabs[2], homeLabels[1])}>
                {homeLabels[1]}
            </MenuItem>

        </StyledPopOver>
        <Routes>
            {/* <Route path={allTabs.length} exact>
                <Navigate to={allTabs[0]}/>
            </Route> */}
            <Route path={allTabs[0]} exact element={ <Home />} />
            <Route path={allTabs[2]} exact element={ <Home />} />
            <Route path={allTabs[1]} exact element={ <Login />} />
        </Routes>
        
        </Box>
    );
}

export default AppContents;