import { render, screen } from "@testing-library/react";
import { UnderlineButtonComponent } from "./UnderlineButton";

describe("underline button test", () => {
  it("selected button test", () => {
    render(
      <UnderlineButtonComponent
        children={"testing content"}
        style={{ border: "2px solid red" }}
      />
    );
    const buttonelement = screen.getByText("testing content");
    expect(buttonelement).toBeInTheDocument();
  });
});
