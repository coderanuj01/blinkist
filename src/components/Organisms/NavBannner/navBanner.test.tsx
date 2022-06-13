import { render, screen } from "@testing-library/react";
import { NavBannerComponent } from "./NavBanner";

describe("Banner test", () => {
  it("testing Nav Banner", () => {
    render(<NavBannerComponent />);

    const heading1 = screen.getByText("Explore Books on entrepreneurship");
    expect(heading1).toBeInTheDocument();
  });
});
