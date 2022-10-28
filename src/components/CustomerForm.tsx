import React, {
  FC
} from 'react'

import {
  Box,
  Stack,
  Button,
  FormControl
} from '@mui/material'
import {
  TextField
} from "formik-mui";
import {
  Formik,
  Form,
  Field,
  useFormik
} from 'formik'
import {
  PersonalSchema
} from './Schemas'
import {OrderData} from '../interfaces/interfaces'


interface PersonalFormProps {
  handleNext: () => void;
  orderData: OrderData;
  setOrderData: (OrderData:OrderData) => void
}

const CustomerForm: FC < PersonalFormProps > = ({ handleNext,orderData,setOrderData }) => {
const {firstName,lastName,email} = orderData
  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        email: email
      }}
      validationSchema={PersonalSchema}

      onSubmit={  (values) => {
         setTimeout( ()=>{
         setOrderData({
           ...orderData,
           firstName:values.firstName,
           lastName:values.lastName,
           email:values.email
         })
        handleNext()
         },500)
      }}
      >
      {({
        submitForm, isSubmitting
      }) => (
        <Form autoComplete="off">
        
  <Box mt={5}>
  
   <FormControl sx={ { m: '1.3rem 5rem' }}>
   
      <Field
          component={TextField}
          id="firstName"
          label="FirstName"
          name='firstName'
          
          />
        </FormControl>
        
        <FormControl sx={ { m: '1.3rem 5rem' }}>
     <Field
          component={TextField}
          id="lastname"
          label="LastName"
          name='lastName'
          
          />
        </FormControl>
        
        <FormControl sx={ { m: '1.3rem 5rem' }}>
        
      <Field
          component={TextField}
          id="email"
          label="Email"
          name='email'
          
          />
        </FormControl>
        </Box> 
        
 <Stack m={3} direction='row' justifyContent='space-around'>
 
      <Button size='large' 
              variant='contained' 
              type='submit' 
              onClick={submitForm}>
              Next
              </Button>
      
      </Stack>
        </Form>
        )}
        </Formik>
      )
      }

export default CustomerForm;