import logo from './logo.svg';
import AppContents from './AppContents'; 
import './App.css';
import {applicationTheme} from './styles/mainStyles'
import { ThemeProvider } from '@mui/system';

const App = () => {
  return (
     <ThemeProvider theme={applicationTheme}>
       <AppContents/>
     </ThemeProvider>
  );
}

export default App;
