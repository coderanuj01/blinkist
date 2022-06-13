import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavbarDropdownComponent } from "./NavbarDropdown";

let DropdownTest = (args: any) => {
  return (
    <BrowserRouter>
      <NavbarDropdownComponent {...args} />
    </BrowserRouter>
  );
};

describe("dropdown test", () => {
  it("Navbar Dropdown Test", () => {
    render(<DropdownTest />);

    const heading = screen.getByText("Explore by category");
    expect(heading).toBeInTheDocument();

    const subheading = screen.getByText("Education");
    expect(subheading).toBeInTheDocument();
  });
});
