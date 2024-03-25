import * as Yup from "yup";

export const bookCamperSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 5 characters")
    .max(25, "Maximum name length is 30 symbols")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  date: Yup.string().required("Date is required"),
  comment: Yup.string(),
});
