import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
// import range from "lodash/range";

const BirthDatePicker = ({ registerEditForm, control }) => {

  return (
    <Controller
      control={control}
      name='date-input'
      render={({ field }) => (
        <DatePicker
          placeholderText='Select date'
          onChange={(date) => field.onChange(date)}
          selected={field.value}
        />
      )}
    />
  )
}

export default BirthDatePicker
