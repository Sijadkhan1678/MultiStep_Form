import * as Yup from "yup"

export const PersonalSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Firstname should have 2 char")
    .max(20, "firstName max 20 char long")
    .required("Firstname is required"),

  lastName: Yup.string()
    .min(2, "lastName should have 2 chars")
    .max(12, "lastName max 12 chars long")
    .required("LastName is required"),

  email: Yup.string().email().required("Email is required")

});

export const DeliverySchema = Yup.object().shape({
  country: Yup.string().required("Country name is required"),
  province: Yup.string().required("Province name is required "),
  city: Yup.string().required("City is required"),
  postCode: Yup.string().required("Post code is required")
  .min(5,"Post code is min 5 chars length"),
})