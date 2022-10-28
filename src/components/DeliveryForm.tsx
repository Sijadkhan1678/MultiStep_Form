import React, { FC } from 'react'
import { Box, Stack, FormControl, Button } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { DeliverySchema } from './Schemas'
import {OrderData} from '../interfaces/interfaces'

interface DeliveryFormProps {
  handleNext: () => void;
  handleBack: () => void;
  orderData: OrderData;
  setOrderData: (orderData:OrderData) => void
}

const DeliveryForm: FC < DeliveryFormProps > = ({ handleNext,handleBack,orderData,setOrderData }) => {
  
  const { country,province,city,postCode } =
orderData    
  return (
    <Formik

      initialValues={{
        country: country,
        province: province,
        city: city,
        postCode: postCode,
      }}
      validationSchema={DeliverySchema}
      onSubmit={ (values) => {
      setTimeout( () => {
      setOrderData({
        ...orderData,
       country: values.country,
       province: values.province,
       city: values.city,
       postCode: values.postCode,
      })
      handleNext()},500)
      }}>
  
    { ({submitForm}) =>(
    
    <Form>
  <Box mt={4}>
    <FormControl sx={ { m: '1.3rem 5rem' }}>
      <Field
        component={TextField}
        id="country"
        label="Country name"
        name="country"
        />
        </FormControl>
 <FormControl sx={ { m: '1rem 5rem' }}>
      <Field
        component={TextField}
        id="Province"
        label="Province name"
        name="province"
        helperText=""
        />
        </FormControl>
 <FormControl sx={{ m: '1rem 5rem' }}>
      <Field
        component={TextField}
        id="city"
        label="City name"
        name="city"
        helperText=""
        />
        </FormControl>
       <FormControl sx={ { m: '1rem 5rem' }}>
      <Field
        component={TextField}
        id="postcode"
        label="Postal Code"
        name="postCode"
        type='number'
        />
        </FormControl>
        </Box>
 <Stack m={3} 
        direction='row'
        justifyContent='space-around'>
        
      <Button variant='contained' 
      onClick={handleBack}>Back </Button>
      <Button size='large' 
      variant='contained' 
      type='submit' 
      onClick={submitForm}>Next</Button>
      </Stack>
      </Form>
      )}
        
        
        </Formik>
  )
}
export default DeliveryForm