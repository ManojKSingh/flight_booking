import React from 'react';
import { formatTodayDate } from "../../utils/dateFormat";


function Inputdate({
  disablePastDate = true,
  disableFutureDate = false,
  label,
  register,
  required,
}) {
  let dateProps = {};

  if (disablePastDate) {
    dateProps["min"] = formatTodayDate();
  }
  if (disableFutureDate) {
    dateProps["max"] = formatTodayDate();
  }
  return (<input type="date" {...dateProps} {...register(label, { required })} />)
}

export default Inputdate
