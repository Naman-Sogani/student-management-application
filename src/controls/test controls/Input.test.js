import { render, screen } from "@testing-library/react";
import Input from "../Input";

const mockedOnChange = jest.fn();

test("should render input element", () => {
  render(
    <Input
      value="hello World"
      name="fullName"
      label="Full Name"
      onChange={mockedOnChange}
    />
  );
  const inputElement = screen.getByRole("textbox");
  expect(inputElement.value).toBe("hello World");
});
