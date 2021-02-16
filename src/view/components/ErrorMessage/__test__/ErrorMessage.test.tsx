import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import ErrorMessage from "../";

describe("ErrorMessage", () => {
  it("renders default component", () => {
    render(<ErrorMessage text="Error message test" />);

    expect(screen.getByText("Error message test")).toBeInTheDocument();
    expect(screen.queryByText("Try again")).not.toBeInTheDocument();
  });

  it("renders button when buttonAction is given", () => {
    const buttonAction = jest.fn();
    render(
      <ErrorMessage text="Error message test" buttonAction={buttonAction} />
    );

    const button = screen.getByText("Try again");

    fireEvent.click(button);

    expect(screen.getByText("Error message test")).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttonAction).toHaveBeenCalledTimes(1);
  });

  it("renders button with correct text when buttonText is given", () => {
    render(
      <ErrorMessage
        text="Error message test"
        buttonAction={() => {}}
        buttonText="Button text"
      />
    );

    expect(screen.getByText("Error message test")).toBeInTheDocument();
    expect(screen.getByText("Button text")).toBeInTheDocument();
  });
});
