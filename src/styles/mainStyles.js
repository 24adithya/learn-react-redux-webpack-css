import { styled, createTheme, ThemeProvider, fontSize } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {Button, TextField, Box, Popover} from '@mui/material';


const genericProps = {
  fontSize:12  
}

export const applicationTheme = createTheme({
    palette: {
      primary: {
        main: red[500],
        backgroundColor: '#1976d2', //blue
        color: red[500],
      },
    },
  });

 export const StyledSubmitButton = styled(Button)(({ theme }) => ({
    minWidth: 0,
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.backgroundColor,
    color: theme.palette.color,
    fontSize: genericProps.fontSize
  }));

  export const StyledTextField = styled(TextField)(({ theme }) => ({
    fontSize: genericProps.fontSize
  }));

  export const StyledBox = styled(Box)(({ theme }) => ({
    fontSize: genericProps.fontSize,
    '& > :not(style)' : { m: 1 }
  }));

  export const StyledPopOver = styled(Popover)(({ theme }) => ({
    fontSize: genericProps.fontSize
  }));

// export const userStyles = {
//   submitButton: {
//     fontSize: 12
//   },
//   inputTextField: {
//     fontSize: 12
//   },
//   box: {
//     '& > :not(style)' : { m: 1 }
//   },
//   tabs: {
//     fontSize: 12
//   },
//   tab: {
//     fontSize: 12
//   },
//   popover: {
//     pointerEvents:'none'
//   }
// };

//Commented out code - we can also create custom components
//   const MyThemeComponent = styled('div')(({ theme }) => ({
//     color: theme.palette.primary.contrastText,
//     backgroundColor: theme.palette.primary.main,
//     padding: theme.spacing(1),
//     borderRadius: theme.shape.borderRadius,
//   }));