import { ReactComponent as DropDownIcon } from "../../../Icon/dropdownarrow.svg";
import { render, screen } from "@testing-library/react";
import { IconButtonComponent } from "./IconButton";
import { ReactComponent as UpArrow } from "../../../Icon/uparrow.svg";

describe("Icon button component", () => {
  it("keyboard arrow down", () => {
    render(<IconButtonComponent children={<DropDownIcon />} />);
    const IconButtonElement = screen.getByRole("button");
    expect(IconButtonElement).toBeInTheDocument();
  });

  it("keyboard up down", () => {
    render(<IconButtonComponent children={<UpArrow />} />);
    const IconButtonElement = screen.getByRole("button");
    expect(IconButtonElement).toBeInTheDocument();
  });
});
