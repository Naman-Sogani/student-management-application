import { render, screen } from "@testing-library/react";
import Button from "../Button";

// const mockedOnChange = jest.fn();

test("should render Button element", () => {
  render(<Button text="Submit" />);
  const buttonElement = screen.getByRole("button", { name: "Submit" });
  expect(buttonElement).toBeInTheDocument();
});
