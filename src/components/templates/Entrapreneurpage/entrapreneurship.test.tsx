import { render, screen } from "@testing-library/react";
import { EntrepreneurshipPageComponent } from "./Entrapreneur";
import { NavbarComponent } from "../../Organisms/Navbar/Navbar";
import { EntrepreneurshipComponent } from "../../Organisms/Entrepreneurship/Entrepreneurship";
import { FooterComponent } from "../../Organisms/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Enterpreneur test", () => {
  test("test enterprenuer template", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <EntrepreneurshipPageComponent
                header={<NavbarComponent />}
                body={<EntrepreneurshipComponent />}
                footer={<FooterComponent />}
              ></EntrepreneurshipPageComponent>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  });
});
