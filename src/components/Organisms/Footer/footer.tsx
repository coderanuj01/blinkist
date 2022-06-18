import { styled, Typography } from "@mui/material";
import { ImageComponent } from "../../atoms/Image/Image";
import blink from "../../../Images/blink.png";
import { NavFooterData as data } from "../../../data/NavFooterData";

let Items = styled("div")({
  marginTop: 16,
});

let OuterFooter = styled("div")({
  height: "370px",
  width: "100vw",
  backgroundColor: "#F1F6F4",
});

let PreOuterFooter = styled("div")({
  marginLeft: "244px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

let ImageOuter = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "34px",
});

let ImageInner = styled("div")({
  width: "378px",
});

const HeadingText = styled("text")({
  fontFamily: "Cera Pro",
  fontWeight: 700,
  fontSize: 16,
  color: "#03314B",
});

const ListText = styled("text")({
  color: "#6D787E",
  fontFamily: "Cera Pro",
  fontWeight: 400,
});

const WidthBox = styled("div")({
  width: "214px",
});

const CopyWriteBox = styled("div")({
  marginTop: "60px",
});

export const FooterComponent = () => {
  return (
    <OuterFooter>
      <PreOuterFooter>
        <ImageOuter>
          <ImageInner>
            <ImageComponent source={blink}></ImageComponent>
            <br></br>
            <br></br>
            <Typography
              variant="h5"
              sx={{
                color: "#0365F2",
                fontFamily: "Cera Pro",
                fontWeight: 500,
                fontSize: 24,
              }}
            >
              Big ideas in small packages <br></br> Start learnign now
            </Typography>
          </ImageInner>
          <WidthBox>
            <HeadingText>{data.Editorial.title}</HeadingText>
            {data.Editorial.data.map((text, key) => (
              <Items key={key}>
                <ListText>{text}</ListText>
              </Items>
            ))}
          </WidthBox>
          <WidthBox>
            <HeadingText>{data.UsefulLinks.title}</HeadingText>
            {data.UsefulLinks.data.map((item, key) => (
              <Items key={key}>
                <ListText>{item}</ListText>
              </Items>
            ))}
          </WidthBox>
          <WidthBox>
            <HeadingText>{data.Company.title}</HeadingText>
            {data.Company.data.map((texts, key) => (
              <Items key={key}>
                <ListText>{texts}</ListText>
              </Items>
            ))}
          </WidthBox>
        </ImageOuter>
        <CopyWriteBox>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Cera Pro",
              color: "#6D787E",
            }}
          >
            © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
            Policies
          </Typography>
        </CopyWriteBox>
      </PreOuterFooter>
    </OuterFooter>
  );
};
