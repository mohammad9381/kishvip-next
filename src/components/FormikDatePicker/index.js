import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DP from "react-modern-calendar-datepicker";

const FormikDatePicker = ({ name, label, formik, onChange }) => {
  const field = formik.getFieldProps(name);
  return (
    <>
      <label htmlFor="date_mehman">تاریخ مهمان </label>
      <DP
        shouldHighlightWeekends
        inputPlaceholder="انتخاب کنید..."
        locale="fa"
        name="birthDate"
        className="form-control "
        value={field.value}
        onChange={onChange}
      />
      {formik.touched[name] && formik.errors[name] && (
        <small className="text-right text-danger mb-2 mt-1 d-block">
          <span className="pl-2">*</span>
          {formik.errors[name]}
        </small>
      )}
    </>
  );
};
export default FormikDatePicker;
