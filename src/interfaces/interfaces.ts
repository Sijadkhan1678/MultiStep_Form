export interface CustomerFormProps {
  handleNext: () => void;
  orderData: OrderData;
  setOrderData: (OrderData:OrderData) => void
}

export interface DeliveryFormProps {
  handleNext: () => void;
  handleBack: () => void;
  orderData: OrderData;
  setOrderData: (orderData:OrderData) => void
}

export interface OrderData {
   firstName:string;
   lastName: string;
   email: string;
   country:string;
   province:string
   city:string
   postCode:string | number
}

