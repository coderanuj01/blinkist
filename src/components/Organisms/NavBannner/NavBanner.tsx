import { Typography, styled } from "@mui/material";

const OuterBanner = styled("div")({
  height: "264px",
  width: "912px",
  display: "flex",
  backgroundColor: "#F1F6F4",
});

const PreOuterBanner = styled("div")({
  height: "180px",
  width: "461px",
  display: "flex",
  marginLeft: "45px",
  marginTop: "45px",
  flexDirection: "column",
  gap: "15px",
});

const ImageBox = styled("div")({
  width: "150px",
  height: "100px",
  marginTop: "22px",
});

const HeadingBox = styled("div")({
  height: "90px",
});

const SubHeadingBox = styled("div")({
  height: "69px",
});

export const NavBannerComponent = () => {
  return (
    <OuterBanner>
      <PreOuterBanner>
        <HeadingBox>
          <Typography variant="h4">
            Explore Books on entrepreneurship
          </Typography>
        </HeadingBox>
        <SubHeadingBox>
          <Typography variant="subtitle2">
            Everything you need to know about thriving on a <br></br>
            shoestring budget, making your first million, and hiring <br></br>
            right from the start.
          </Typography>
        </SubHeadingBox>
      </PreOuterBanner>
      <ImageBox>
        <img src="Images/bannerImg.png" alt="Yoga"></img>
      </ImageBox>
    </OuterBanner>
  );
};
