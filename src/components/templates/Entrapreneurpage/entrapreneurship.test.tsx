import { render, screen } from "@testing-library/react";
import { EntrepreneurshipPageComponent } from "./Entrapreneur";
import { NavbarComponent } from "../../Organisms/Navbar/Navbar";
import { EntrepreneurshipComponent } from "../../Organisms/Entrepreneurship/Entrepreneurship";
import { FooterComponent } from "../../Organisms/Footer/footer";

describe("Enterpreneur test", () => {
  test("test enterprenuer template", () => {
    <EntrepreneurshipPageComponent
      header={<NavbarComponent />}
      body={<EntrepreneurshipComponent />}
      footer={<FooterComponent />}
    ></EntrepreneurshipPageComponent>;
  });
});
