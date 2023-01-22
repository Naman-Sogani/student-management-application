import { render, screen } from "@testing-library/react";
import RadioGroup from "../RadioGroup";

const mockedOnChange = jest.fn();

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" }
];

test("should render RadioGroup element", () => {
  render(
    <RadioGroup
      name="gender"
      label="Gender"
      onChange={mockedOnChange}
      value="male"
      items={genderItems}
    />
  );
  const inputElement = screen.getByText("Gender");
  expect(inputElement).toBeInTheDocument();
});
