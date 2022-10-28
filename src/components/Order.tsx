import React, { FC, useState } from 'react';
import { Box, Stack, Button } from '@mui/material'

interface OrderProps {
  
  handleBack: () => void;
  resetSteps: () => void;
}

const Order: FC < OrderProps > = ({ handleBack,resetSteps
}) => {

  const [submit,
    setSubmit] = useState < boolean > (false)
    
  const orderSubmited = () => {
    
    setTimeout(()=>{
    alert("Order Submited Successfully")
    setSubmit(true)
    },600)
  }

  return (
    <Box mt={9} ml={1}>
 <Stack m={5} direction='row' justifyContent='space-between'>
 
      <Button variant='contained' 
              onClick={handleBack}>
              Back 
            </Button>
      
  {  submit &&(  <Button variant="contained"
              onClick={resetSteps} >
              Reset      
            </Button>)
  }
   <Button variant='contained' 
           onClick={orderSubmited} 
           disabled={submit ? true: false}>
           Order Now
          </Button>
          
 </Stack>
      </Box>
  )
}

export default Order