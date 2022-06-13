import { render, screen } from "@testing-library/react";
import { LibraryPageComponent } from "./LibraryPage";
import { NavbarComponent } from "../../Organisms/Navbar/Navbar";
import { LibraryBodyComponent } from "../../Organisms/LibraryBody/LibraryBody";
import { FooterComponent } from "../../Organisms/Footer/footer";

describe("Library Page test", () => {
  it("testing library page", () => {
    render(
      <LibraryPageComponent
        header={<NavbarComponent />}
        body={<LibraryBodyComponent />}
        footer={<FooterComponent />}
      />
    );
  });
});
