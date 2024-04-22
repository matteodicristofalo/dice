import { render, screen } from "@testing-library/react";
import { Search } from "./search";

describe("Search", () => {
  it("renders the input", () => {
    render(<Search suggestions={[]} />);
    expect(screen.getByPlaceholderText("Enter a city")).toBeInTheDocument();
  });
});
