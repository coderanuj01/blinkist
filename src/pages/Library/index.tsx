import { LibraryBodyComponent } from "../../components/Organisms/LibraryBody/LibraryBody";
import { FooterComponent } from "../../components/Organisms/Footer/footer";
import { NavbarComponent } from "../../components/Organisms/Navbar/Navbar";
import { LibraryPageComponent } from "../../components/templates/LibraryPage/LibraryPage";

export const Library = () => {
  return (
    <>
      <LibraryPageComponent
        header={<NavbarComponent />}
        body={<LibraryBodyComponent />}
        footer={<FooterComponent />}
      ></LibraryPageComponent>
    </>
  );
};
