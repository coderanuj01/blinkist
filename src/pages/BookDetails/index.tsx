import { BookDetailBodyComponent } from "../../components/Organisms/BookDetailBody/BookDetailBody";
import { FooterComponent } from "../../components/Organisms/Footer/footer";
import { NavbarComponent } from "../../components/Organisms/Navbar/Navbar";
import { LibraryPageComponent } from "../../components/templates/LibraryPage/LibraryPage";

export const BookDetails = () => {
  return (
    <>
      <LibraryPageComponent
        header={<NavbarComponent />}
        body={<BookDetailBodyComponent />}
        footer={<FooterComponent />}
      ></LibraryPageComponent>
    </>
  );
};
