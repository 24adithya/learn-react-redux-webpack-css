import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


export const Home = () => {

    const [welcomeMessage, setWelcomeMessage] = useState('Hello World!');

    return (
        <div>
            <h1>
                {welcomeMessage}
            </h1>
        </div>
    );
    
}