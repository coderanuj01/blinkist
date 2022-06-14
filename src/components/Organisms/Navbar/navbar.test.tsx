import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavbarComponent } from "./Navbar";

const NavTest = () => (
  <BrowserRouter>
    <NavbarComponent />
  </BrowserRouter>
);

describe("navbar test", () => {
  it("testing navbar", () => {
    render(<NavTest />);

    expect(window.location.pathname).toEqual("/");

    const myLibrary = screen.queryByText(/My Library/i);
    expect(myLibrary).not.toBeNull();
  });
});
