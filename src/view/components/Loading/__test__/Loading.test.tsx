import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Loading from "../";

describe("Loading component", () => {
  it("Renders default component", () => {
    render(<Loading text="loading text" />);

    expect(screen.getByText("loading text")).toBeInTheDocument();
  });
});
