import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../controls/Controls";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../features/Users";

// import { makeStyles } from "@material-ui/core";
import { useForm, Form } from "../../components/useForm";
import * as studentService from "../../services/studentService";
// import { useStateValue } from "../../StateProvider";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" }
];

const initialFValues = {
  id: 0,
  fullName: "",
  age: "",
  gender: "male",
  doj: "",
  address: "",
  courseId: "",
  batchId: ""
};
export default function StudentForm(props) {
  const userList = useSelector(state => state.users.value);
  const dispatch = useDispatch();

  //Validations
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("age" in fieldValues)
      temp.age =
        fieldValues.age && !isNaN(fieldValues.age) ? "" : "Invalid age.";
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required.";
    if ("batchId" in fieldValues)
      temp.batchId =
        fieldValues.batchId.length !== 0 ? "" : "Please select a batch.";
    if ("courseId" in fieldValues)
      temp.courseId =
        fieldValues.courseId.length !== 0 ? "" : "Please select a course.";
    setErrors({
      ...temp
    });
    if (fieldValues == values) return Object.values(temp).every(x => x === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  // const [{ registerBasket }, dispatch] = useStateValue();
  // console.log("this is the basket >>>", registerBasket);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // window.alert(values.fullName);
      dispatch(
        addUser({
          // type: "REGISTER",

          // item: {
          // id: userList[userList.length - 1].id + 1,
          id: userList.length + 1,

          fullName: values.fullName,
          age: values.age,
          gender: values.gender,
          dob: values.dob,
          address: values.address,
          courseId: values.courseId,
          batchId: values.batchId
          // }
        })
      );
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="address"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}
          />

          <Controls.Input
            name="age"
            label="Age"
            value={values.age}
            onChange={handleInputChange}
            error={errors.age}
          />

          <Controls.DatePicker
            name="doj"
            label="Date of Joining"
            value={values.doj}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="batchId"
            label="Batch"
            value={values.batchId}
            onChange={handleInputChange}
            options={studentService.getBatchCollection()}
            error={errors.batchId}
          />

          <Controls.Select
            name="courseId"
            label="Course"
            value={values.courseId}
            onChange={handleInputChange}
            options={studentService.getCourseCollection()}
            error={errors.courseId}
          />
          <div>
            <Controls.Button variant="text" text="Reset" onClick={resetForm} />
            <Controls.Button type="submit" text="Submit" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
