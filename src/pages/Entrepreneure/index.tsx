import { NavbarComponent } from "../../components/Organisms/Navbar/Navbar";
import { FooterComponent } from "../../components/Organisms/Footer/footer";
import { EntrepreneurshipComponent } from "../../components/Organisms/Entrepreneurship/Entrepreneurship";
import { EntrepreneurshipPageComponent } from "../../components/templates/Entrapreneurpage/Entrapreneur";

export const Enterpreneure = () => {
  return (
    <>
      <EntrepreneurshipPageComponent
        header={<NavbarComponent />}
        body={<EntrepreneurshipComponent />}
        footer={<FooterComponent />}
      ></EntrepreneurshipPageComponent>
    </>
  );
};
