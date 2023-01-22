import { render, screen } from "@testing-library/react";
import ActionButton from "../ActionButton";

// const mockedOnChange = jest.fn();

test("should render ActionButton element", () => {
  render(<ActionButton id={"action"} />);
  const buttonElement = screen.getByRole("button", { id: "action" });
  expect(buttonElement).toBeInTheDocument();
});
