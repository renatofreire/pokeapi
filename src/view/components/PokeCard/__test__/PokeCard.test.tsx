import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import PokeCard from "..";

test("renders default PokeCard component", () => {
  render(<PokeCard name="Charizard" number={6} image={"link-to-file"} />);

  const imageComponent = screen.getByAltText("Charizard image");

  expect(screen.getByText("Charizard")).toBeInTheDocument();
  expect(screen.getByText("#6")).toBeInTheDocument();
  expect(imageComponent).toBeInTheDocument();
  expect(imageComponent).toHaveAttribute("src", "link-to-file");
});

test("renders PokeCard component with primary button", () => {
  const mockButtonAction = jest.fn();
  render(
    <PokeCard
      name="Charizard"
      number={6}
      image={"link-to-file"}
      primaryButtonAction={mockButtonAction}
      primaryButtonText="primary button"
    />
  );

  const imageComponent = screen.getByAltText("Charizard image");
  const button = screen.getByText("primary button");
  fireEvent.click(button);

  expect(screen.getByText("Charizard")).toBeInTheDocument();
  expect(screen.getByText("#6")).toBeInTheDocument();
  expect(imageComponent).toBeInTheDocument();
  expect(imageComponent).toHaveAttribute("src", "link-to-file");

  expect(button).toBeInTheDocument();
  expect(mockButtonAction).toBeCalledTimes(1);
});

test("renders PokeCard component with negative button", () => {
  const mockButtonAction = jest.fn();
  render(
    <PokeCard
      name="Charizard"
      number={6}
      image={"link-to-file"}
      negativeButtonAction={mockButtonAction}
      negativeButtonText="negative button"
    />
  );

  const imageComponent = screen.getByAltText("Charizard image");
  const button = screen.getByText("negative button");
  fireEvent.click(button);

  expect(screen.getByText("Charizard")).toBeInTheDocument();
  expect(screen.getByText("#6")).toBeInTheDocument();
  expect(imageComponent).toBeInTheDocument();
  expect(imageComponent).toHaveAttribute("src", "link-to-file");

  expect(button).toBeInTheDocument();
  expect(mockButtonAction).toBeCalledTimes(1);
});

test("renders PokeCard component with support button", () => {
  const mockButtonAction = jest.fn();
  render(
    <PokeCard
      name="Charizard"
      number={6}
      image={"link-to-file"}
      supportButtonAction={mockButtonAction}
      supportButtonText="support button"
    />
  );

  const imageComponent = screen.getByAltText("Charizard image");
  const button = screen.getByText("support button");
  fireEvent.click(button);

  expect(screen.getByText("Charizard")).toBeInTheDocument();
  expect(screen.getByText("#6")).toBeInTheDocument();
  expect(imageComponent).toBeInTheDocument();
  expect(imageComponent).toHaveAttribute("src", "link-to-file");

  expect(button).toBeInTheDocument();
  expect(mockButtonAction).toBeCalledTimes(1);
});
