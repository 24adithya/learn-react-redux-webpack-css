import React, {useState, useEffect} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { userStyles } from '../styles/mainStyles';

import { StyledTextField, StyledSubmitButton, StyledBox } from '../styles/mainStyles';


const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h3>
                Enter Login Details
                <StyledBox>
                <StyledTextField
                    id="input-with-icon-textfield"
                    label="Username"
                    onChange={handleUsernameChange}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircleOutlinedIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                <StyledTextField
                    type="password"
                    id="input-with-icon-password"
                    label="Password"
                    onChange={handlePasswordChange}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <VisibilityOutlinedIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                </StyledBox>

                <StyledSubmitButton variant="outlined">Outlined</StyledSubmitButton>
            </h3>
        </div>
    );
    
}

export default Login;