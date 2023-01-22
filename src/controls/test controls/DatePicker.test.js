import { render, screen } from "@testing-library/react";
import DatePicker from "../DatePicker";

const mockedOnChange = jest.fn();

test("should render DatePicker element", () => {
  render(
    <DatePicker name="doj" label="Date of Joining" onChange={mockedOnChange} />
  );
  const datePickerElement = screen.getByRole("textbox");
  expect(datePickerElement).toBeInTheDocument();
});
