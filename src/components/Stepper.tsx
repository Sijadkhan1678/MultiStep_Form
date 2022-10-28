import React, {useState} from 'react'
import {Box,Stack,Stepper,Step,StepLabel,Button} from '@mui/material'
import CustomerForm from './CustomerForm';
import DeliveryForm from './DeliveryForm';
import Order from './Order';
import {Form} from 'formik'
import {OrderData} from '../interfaces/interfaces'

const steps = [
  'Customer Information',
  'Delivery Details',
  'Confirm Order',
];

const FormStepper = () => {
  
  const [orderData,setOrderData] = useState <OrderData>({
   firstName: "",
   lastName: "",
   email: "",
   country:'',
   province:"",
   city:"",
   postCode:""
  })
  
  const [activeStep,setActiveStep] = useState<number>(0)
  
  const handleNext = () => setActiveStep( activeStep + 1)
  
  const handleBack = () =>  setActiveStep( activeStep -1 )
  
  // function to reset Steps
  const resetSteps = () => {
    setActiveStep(0)
    setOrderData({
      
         firstName: "",
         lastName: "",
         email: "",
         country:'',
         province:"",
         city:"",
         postCode:""
    })
  }
  
const formList = [
    <CustomerForm handleNext={handleNext}
                  orderData={orderData}
                  setOrderData={setOrderData}/>,
    <DeliveryForm handleNext={handleNext}                 handleBack={handleBack}
                  orderData={orderData}
                  setOrderData={setOrderData}/>,
    <Order        resetSteps={resetSteps}                 handleBack={handleBack} />
    ]
  
  const currentForm = formList[activeStep]
  
  return (
    <Box sx={{ width: '100%' }}>
    
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Box>
      {currentForm}
      
      </Box>
     
      
    </Box>
  );
}
export default FormStepper