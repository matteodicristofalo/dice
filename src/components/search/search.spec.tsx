import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Search } from "./search";

test("renders", () => {
  render(<Search suggestions={[]} />);
  expect(screen.getByPlaceholderText("Enter a city")).toBeDefined();
});
