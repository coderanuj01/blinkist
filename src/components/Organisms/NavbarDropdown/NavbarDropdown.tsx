import { useNavigate } from "react-router-dom";
import ExtendedNavData from "../../../data/NavDropdownData";
import { IconTextComponent } from "../../molecules/IconWithText/IconText";
import { styled } from "@mui/material";

const OuterNavbarDropdown = styled("div")({
  height: "100vh",
  width: "100vw",
  zIndex: 1,
  backgroundColor: "rgba(157, 163, 166, 0.45)",
});

const PreOuterNavbarDropdown = styled("div")({
  width: "100vw",
  height: "368px",
  backgroundColor: "#F1F6F4",
  position: "absolute",
  zIndex: 10,
  boxSizing: "border-box",
});

const PreInnerNavbarDropdown = styled("div")({
  width: "900px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  position: "relative",
  zIndex: 2,
});

const InnerNavbarDropdown = styled("div")({
  height: "74px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  borderBottom: "2px solid black",
  position: "relative",
});

const ListBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "32px",
});

const ListItemBox = styled("div")({
  width: "292px",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
});

const HeadingText = styled("text")({
  marginTop: "22px",
});

const HeadingTextMargin = styled("text")({
  marginTop: "22px",
  marginRight: "250px",
});

export const NavbarDropdownComponent = () => {
  const navigate = useNavigate();
  const entrapreneurPage = () => {
    navigate("/entrepreneurship");
  };

  return (
    <OuterNavbarDropdown>
      <PreOuterNavbarDropdown>
        <PreInnerNavbarDropdown>
          <InnerNavbarDropdown>
            <HeadingText>Explore by category</HeadingText>
            <HeadingText>See recently added titles</HeadingText>
            <HeadingTextMargin>See popular Titles</HeadingTextMargin>
          </InnerNavbarDropdown>
          <ListBox>
            {ExtendedNavData.map((item, key) => {
              return (
                <ListItemBox key={key}>
                  <IconTextComponent
                    iconSource={item.icon}
                    key={key}
                    title={item.title}
                    variant="caption"
                    onClick={entrapreneurPage}
                  ></IconTextComponent>
                </ListItemBox>
              );
            })}
          </ListBox>
        </PreInnerNavbarDropdown>
      </PreOuterNavbarDropdown>
    </OuterNavbarDropdown>
  );
};
