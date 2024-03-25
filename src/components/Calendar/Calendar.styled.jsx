import { createGlobalStyle } from "styled-components";

export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker * {
  font-family: "Inter", sans-serif;
  background-color: "#FFF";
  color: "#101828";
}

.react-datepicker {
  width: 100% !important;
  border-radius: 12px !important;
}

.react-datepicker__month-container {
  width: 100% !important;
}

.react-datepicker-wrapper {
  width: 100% !important;
  margin-top: 4px;
}

.react-datepicker-popper {
  width: 100%;
  max-width: 270px;
}

.react-datepicker__current-month {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  padding-bottom: 15px;
}

.react-datepicker__day-names {
  border: none !important;
}

.react-datepicker__day-name {
  color: "#475467";
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
}

.react-datepicker__header,
.react-datepicker__month-container,
.react-datepicker {
  border-radius: 8px !important;
}

.react-datepicker__header {
  border: none;
}

.react-datepicker__navigation-icon::before,
.react-datepicker__navigation:hover .react-datepicker__navigation-icon::before {
  border-color: "#101828";
  border-radius: 1.5px;
}

.react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
  outline: 1px solid "#101828";
  background-color: transparent;
  border-radius: 50%;
}

.react-datepicker__day {
  font-size: 14px;
  font-weight: 400;
  color: "#475467";
}

.react-datepicker__day--selected {
  background-color: "#E44848" !important;
  color: "#fff";
  border-radius: 50%;
}

.react-datepicker__day--selected:hover {
  outline: 1px solid "#101828";
  background-color: "#E44848";
  border-radius: 50%;
}

.react-datepicker__day--disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.react-datepicker__triangle path {
  display: none;
}`;
