import { Box } from "@mui/system";
import { ImageComponent } from "../../atoms/Image/Image";
import blink from "../../../Images/blink.png";
import { IconButtonComponent } from "../../atoms/IconButtons/IconButton";
import { ReactComponent as SearchIcon } from "../../../Icon/searchicon.svg";
import React, { useState } from "react";
import { ReactComponent as DropDownIcon } from "../../../Icon/dropdownarrow.svg";
import { ReactComponent as UpArrow } from "../../../Icon/uparrow.svg";
import { ButtonComponent } from "../../atoms/Buttons/Button";
import { NavbarDropdownComponent } from "../../Organisms/NavbarDropdown/NavbarDropdown";
import { ReactComponent as Account } from "../../../Icon/account.svg";

type NavbarProps = {
  children?: React.ReactNode;
  isLoggedIn?: boolean;
};

export const NavbarComponent = (props: NavbarProps) => {
  const [extended, setExtended] = useState(false);
  const [navIcon, setNavIcon] = useState(<DropDownIcon />);

  const expandNavbarFunc = () => {
    extended ? setExtended(false) : setExtended(true);
    extended ? setNavIcon(<DropDownIcon />) : setNavIcon(<UpArrow />);
  };

  return (
    <Box sx={{ position: "fixed", marginTop: "0px", top: 0, zIndex: 15 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          width: "100vw",
          height: "86px",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "500px",
            marginTop: "22px",
            marginLeft: "240px",
            height: "36px",
          }}
        >
          <ImageComponent source={blink}></ImageComponent>
          <IconButtonComponent children={<SearchIcon />}></IconButtonComponent>
          <ButtonComponent
            variant="text"
            children={"Explore"}
            color={"inherit"}
            endIcon={navIcon}
            onClick={expandNavbarFunc}
          ></ButtonComponent>
          <ButtonComponent
            variant="text"
            children={"My Library"}
            color={"inherit"}
          ></ButtonComponent>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "80px",
            marginTop: "22px",
            marginRight: "272px",
            height: "36px",
          }}
        >
          <IconButtonComponent children={<Account />}></IconButtonComponent>
          <IconButtonComponent
            children={<DropDownIcon />}
          ></IconButtonComponent>
        </Box>
      </Box>
      {extended ? <NavbarDropdownComponent></NavbarDropdownComponent> : null}
    </Box>
  );
};
