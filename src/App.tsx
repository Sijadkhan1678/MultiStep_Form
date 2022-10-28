import React,{FC} from 'react';
import Stepper from './components/Stepper'
import {Box} from '@mui/material'
import './App.css';


const App: FC = () => {
  
  return (
      <Box mt={5}>
     <Stepper />
    </Box>
  );
}

export default App;


