import { render, screen } from "@testing-library/react";
import { NavbarComponent } from "./Navbar";

describe("navbar test", () => {
  it("testing navbar", () => {
    render(<NavbarComponent />);

    const LibElement = screen.getByText("My Library");
    expect(LibElement).toBeInTheDocument();
  });
});
