import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


export const Home = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div>
            <h3>
                Enter Login Details
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Username"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircleOutlinedIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                <TextField
                    type="password"
                    id="input-with-icon-password"
                    label="Password"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <VisibilityOutlinedIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                </Box>
            </h3>
        </div>
    );
    
}