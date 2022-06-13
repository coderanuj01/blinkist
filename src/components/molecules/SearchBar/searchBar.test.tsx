import { render, screen } from "@testing-library/react";
import { SearchbarComponent } from "./Searchbar";

describe("search bar test", () => {
  it("test searchbar", () => {
    render(<SearchbarComponent />);
    const searchElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    expect(searchElement).toBeInTheDocument();
  });
});
