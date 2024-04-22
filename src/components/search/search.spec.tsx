import { act, render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./search";

describe("Search", () => {
  it("doesn't show the suggestions", () => {
    render(<Search suggestions={[]} />);

    const suggestions = screen.queryByTestId("suggestions");
    expect(suggestions).not.toBeInTheDocument();
  });

  it("shows suggestions on input focus", async () => {
    render(<Search suggestions={["Milan", "Rome"]} />);

    act(() => {
      const input = screen.getByTestId("input");
      input.focus();
    });

    const suggestions = screen.queryByTestId("suggestions");
    expect(suggestions).toBeInTheDocument();
  });

  it("hides suggestions on input blur", async () => {
    render(<Search suggestions={["Milan", "Rome"]} />);

    act(() => {
      const input = screen.getByTestId("input");
      input.blur();
    });

    const suggestions = screen.queryByTestId("suggestions");
    expect(suggestions).not.toBeInTheDocument();
  });

  it("filter suggestions on input change", async () => {
    render(<Search suggestions={["Milan", "Rome"]} />);
    const input = screen.getByTestId("input");
    act(() => {
      input.focus();
    });
    expect(screen.queryByText("Milan")).toBeInTheDocument();
    expect(screen.queryByText("Rome")).toBeInTheDocument();

    act(() => {
      fireEvent.change(input, { target: { value: "Mi" } });
    });

    expect(screen.queryByText("Milan")).toBeInTheDocument();
    expect(screen.queryByText("Rome")).not.toBeInTheDocument();
  });
});
