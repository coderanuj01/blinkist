import { render, screen } from "@testing-library/react";
import { IconTextComponent } from "./IconText";
import { ReactComponent as SearchIcon } from "../../../Icon/searchicon.svg";

describe("iconWithText test", () => {
  it("search with text", () => {
    render(<IconTextComponent iconSource={<SearchIcon />} title="search" />);
    const searchElement = screen.getByText("search");
    expect(searchElement).toBeInTheDocument();
  });
});
