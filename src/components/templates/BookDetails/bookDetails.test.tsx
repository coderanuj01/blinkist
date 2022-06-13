import { render, screen } from "@testing-library/react";
import { NavbarComponent } from "../../Organisms/Navbar/Navbar";

import { FooterComponent } from "../../Organisms/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookDetailComponent } from "./BookDetail";
import { BookDetailBodyComponent } from "../../Organisms/BookDetailBody/BookDetailBody";

describe("Enterpreneur test", () => {
  test("test enterprenuer template", () => {
    render(
      <BrowserRouter>
        <BookDetailComponent
          header={<NavbarComponent />}
          body={<BookDetailBodyComponent />}
          footer={<FooterComponent />}
        ></BookDetailComponent>
      </BrowserRouter>
    );
  });
});
