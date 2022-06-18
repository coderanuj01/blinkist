import { Box, Typography } from "@mui/material";
import { ReactComponent as TimeIcon } from "../../../Icon/clock.svg";
import { ReactComponent as ArrowForwardIcon } from "../../../Icon/side.svg";
import { BookDescription } from "../../../data/BookDescription";
import { ImageComponent } from "../../atoms/Image/Image";
import { ButtonComponent } from "../../atoms/Buttons/Button";
import { useLocation } from "react-router-dom";
import { UnderlineButtonComponent } from "../../molecules/UnderlinedButton/UnderlineButton";
import { useState } from "react";
import { styled } from "@mui/system";

const OuterDiv = styled("div")({
  marginLeft: "264px",
  width: "930px",
  marginTop: "145px",
});

const TabBox = styled("div")({
  width: "600px",
  height: "100px",
  marginTop: "20px",
  marginBottom: "80px",
});

const ButtonTab = styled("div")({
  width: "912px",
  height: "296px",
  borderBottom: "1px solid #E1ECFC",
});

const PreouterDetail = styled("div")({
  marginBottom: "40px",
});

const HeadingDetail = styled("div")({
  display: "flex",
});

const HeadingInnerDetail = styled("div")({
  width: "700px",
  display: "flex",
  flexDirection: "column",
});

const DescriptionDetail = styled("div")({
  marginTop: "24px",
});

const TimeToReadDetail = styled("div")({
  marginTop: "19px",
});

const ButtonDetail = styled("div")({
  marginTop: "63px",
  display: "flex",
});

const ImageBoxx = styled("div")({
  width: "303px",
});

export const BookDetailBodyComponent = () => {
  const location: any = useLocation();

  const [detailType, setDetailType] = useState(1);

  const changeDetail: Function = (num: number): void => {
    setDetailType(num);
  };

  return (
    <OuterDiv>
      <PreouterDetail>
        <Typography variant="body2" sx={{ color: "#03314B" }}>
          {BookDescription.bookDescription.keyIdeas}
        </Typography>
      </PreouterDetail>
      <HeadingDetail>
        <HeadingInnerDetail>
          <Box>
            <Typography variant="h1">
              {location.state ? location.state.text : " "}
            </Typography>
          </Box>
          <DescriptionDetail>
            <Typography sx={{ color: "#03314B", fontSize: 20 }}>
              {BookDescription.bookDescription.description}
            </Typography>
          </DescriptionDetail>
          <DescriptionDetail>
            <Typography variant="body1">
              {BookDescription.bookDescription.author}
            </Typography>
          </DescriptionDetail>
          <TimeToReadDetail>
            <ButtonComponent
              variant={"text"}
              color={"inherit"}
              startIcon={<TimeIcon />}
              children={BookDescription.bookDescription.timeToRead}
            ></ButtonComponent>
          </TimeToReadDetail>
          <ButtonDetail sx={{ gap: 2 }}>
            <ButtonComponent
              variant={"outlined"}
              children={"Read Now"}
              style={{
                width: 122,
                height: 44,
                borderRadius: 4,
                textTransform: "none",
                border: "1px solid #042330",
              }}
              textColor={"#22C870"}
            ></ButtonComponent>
            <ButtonComponent
              variant={"contained"}
              children={"Finished Reading"}
              textColor={"#03314B"}
            ></ButtonComponent>
            <ButtonComponent
              variant={"text"}
              color={"inherit"}
              children={"Send to Kindle"}
              endIcon={<ArrowForwardIcon />}
              textColor={"#6D787E"}
            ></ButtonComponent>
          </ButtonDetail>
        </HeadingInnerDetail>
        <ImageBoxx>
          <ImageComponent
            source={location.state ? location.state.imageSrc : "No Image"}
          ></ImageComponent>
        </ImageBoxx>
      </HeadingDetail>
      <ButtonTab>
        <Box sx={{ marginTop: "60px" }}>
          <Box sx={{ display: "flex", width: "500px" }}>
            <Box
              onClick={() => changeDetail(1)}
              sx={{ cursor: "pointer", width: "200px" }}
            >
              <UnderlineButtonComponent
                children={"Synopsis"}
                style={
                  detailType === 1
                    ? {
                        borderBottom: "2px solid #2CE080",
                        width: 300,
                        paddingBottom: 1,
                      }
                    : {
                        borderBottom: "2px solid #E1ECFC",
                        width: 300,
                        paddingBottom: 1,
                      }
                }
              ></UnderlineButtonComponent>
            </Box>
            <Box
              onClick={() => changeDetail(2)}
              sx={{ cursor: "pointer", width: "200px" }}
            >
              <UnderlineButtonComponent
                children={"Who is it for?"}
                style={
                  detailType === 2
                    ? {
                        borderBottom: "2px solid #2CE080",
                        width: 300,
                        paddingBottom: 1,
                      }
                    : {
                        borderBottom: "2px solid #E1ECFC",
                        width: 300,
                        paddingBottom: 1,
                      }
                }
              ></UnderlineButtonComponent>
            </Box>
            <Box
              onClick={() => changeDetail(3)}
              sx={{ cursor: "pointer", width: "200px" }}
            >
              <UnderlineButtonComponent
                children={"About the Author"}
                style={
                  detailType === 3
                    ? {
                        borderBottom: "2px solid #2CE080",
                        width: 300,
                        paddingBottom: 1,
                      }
                    : {
                        borderBottom: "2px solid #E1ECFC",
                        width: 300,
                        paddingBottom: 1,
                      }
                }
              ></UnderlineButtonComponent>
            </Box>
          </Box>
          <TabBox>
            <Typography
              variant="body2"
              sx={{
                lineHeight: "20.11px",
                fontSize: "16px",
                color: "#03314B",
              }}
            >
              {detailType === 1
                ? BookDescription.tabs.synopsis
                : detailType === 2
                ? BookDescription.tabs.whoIsItFor
                : BookDescription.tabs.authorInfo}
            </Typography>
          </TabBox>
        </Box>
      </ButtonTab>
    </OuterDiv>
  );
};
