import { render, screen } from "@testing-library/react";
import { FooterComponent } from "./footer";

describe("footer test", () => {
  it("testing footer", () => {
    render(<FooterComponent />);

    const heading1 = screen.getByText("Editorial");
    expect(heading1).toBeInTheDocument();

    const heading2 = screen.getByText("Useful Links");
    expect(heading2).toBeInTheDocument();

    const heading3 = screen.getByText("Company");
    expect(heading3).toBeInTheDocument();
  });
});
