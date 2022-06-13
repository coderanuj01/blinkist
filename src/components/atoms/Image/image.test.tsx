import { render, screen } from "@testing-library/react";
import dropshipping from "../../../../public/Images/dropshipping.png";
import { ImageComponent } from "./Image";

describe("image component", () => {
  it("dropshipping image", () => {
    render(<ImageComponent source={dropshipping} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
