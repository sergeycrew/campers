import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { bookCamper } from "../../redux/slice";
//import { formatDate } from "helpers";
import { bookCamperSchema } from "../../utils/bookCamperSchema";
//import { Calendar } from "../CustomDateInput/CustomDateInput";
import "react-datepicker/dist/react-datepicker.css";
import sprite from "../../assets/Images/sprite.svg";
import { Button } from "../Button/Button";
import {
  ErrorMsg,
  Form,
  Label,
  SubmitBtn,
  TitleBlock,
  Icon,
} from "./ModalForm.styled";

const formInitialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export const ModalForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async ({ name, email, date, comment }, actions) => {
    const formData = {
      name,
      email,
      date,
      //date: formatDate(date),
      comment,
    };

    const isValid = await bookCamperSchema.isValid(formData);

    if (!isValid) {
      return;
    }
    dispatch(bookCamper(formData));
  };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleFormSubmit}
      validationSchema={bookCamperSchema}
    >
      {({ touched, errors, handleSubmit, getFieldProps }) => (
        <Form onSubmit={handleSubmit}>
          <TitleBlock>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </TitleBlock>

          <Label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </Label>

          <Label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </Label>
          <Label>
            {/* {<Calendar />} */}
            <Icon>
              <use href={`${sprite}#calendar`}></use>
            </Icon>
            {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </Label>

          <Label>
            <textarea
              name="comment"
              placeholder="Comment"
              {...getFieldProps("comment")}
            />
            {errors.comment && touched.comment && (
              <ErrorMsg>{errors.comment}</ErrorMsg>
            )}
          </Label>

          <Button
            text={"Send"}
            style={{ width: "160px", marginTop: "10px" }}
            type="submit"
            disabled={Object.keys(errors).length > 0}
          />
        </Form>
      )}
    </Formik>
  );
};
