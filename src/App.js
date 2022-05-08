import logo from './logo.svg';
import AppContents from './AppContents'; 
import './App.css';
import {applicationTheme} from './styles/mainStyles'
import { ThemeProvider } from '@mui/system';
import {HashRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
     
       <AppContents/>
     
     </Router>
     </>
  );
}

export default App;
