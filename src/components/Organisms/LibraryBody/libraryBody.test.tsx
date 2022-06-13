import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LibraryBodyComponent } from "./LibraryBody";

let TestLibraryBody = (args: any) => {
  return (
    <BrowserRouter>
      <LibraryBodyComponent {...args} />
    </BrowserRouter>
  );
};

describe("library body test", () => {
  it("library body", () => {
    render(<TestLibraryBody />);

    const Heading1 = screen.getByText("My Library");
    expect(Heading1).toBeInTheDocument();

    const buttonText = screen.getByText("Currently reading");
    expect(buttonText).toBeInTheDocument();
  });
});
