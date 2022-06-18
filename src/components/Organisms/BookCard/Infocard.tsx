import { Typography } from "@mui/material";
import { ImageComponent } from "../../atoms/Image/Image";
import { SimpleButtonComponent } from "../../molecules/SimpleButton/SimpleButton";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as More } from "../../../Icon/more.svg";
import { ReactComponent as User } from "../../../Icon/user.svg";
import { ReactComponent as TimeIcon } from "../../../Icon/clock.svg";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

type InfocardProps = {
  source?: any;
  title?: React.ReactNode;
  writer?: React.ReactNode;
  readTime?: number;
  readCount?: number;
  readStatus?:
    | "reading"
    | "addToLibrary"
    | "addToLibraryColor"
    | "finished"
    | "readAgain";
};

const CardBox1 = styled("div")({
  marginTop: "0px",
  width: "100%",
  borderTop: "1px solid #E1ECFC",
  display: "flex",
  justifyContent: "center",
});

const CardBox2 = styled("div")({
  width: "283px",
  backgroundColor: "#0365F2",
  display: "flex",
  justifyContent: "center",
  paddingTop: "5px",
  height: "47px",
  borderTop: "1px solid #E1ECFC",
});

const CardBox3 = styled("div")({
  marginTop: "0px",
  borderTop: "1px solid #E1ECFC",
  paddingTop: "7px",
});

const CardBox4 = styled("div")({
  display: "flex",
  backgroundColor: "#E1ECFC",
  height: "15px",
  width: "283px",
  marginTop: "6px",
});

const CardBox5 = styled("div")({
  display: "flex",
  backgroundColor: "#E1ECFC",
  height: "14px",
  width: "88px",
  marginTop: "6px",
});

const CardBox6 = styled("div")({
  display: "flex",
  backgroundColor: "#F1F6F4",
  height: "14px",
  width: "195px",
  marginTop: "6px",
});

const CardBox7 = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  height: "33px",
  paddingRight: "30px",
});

const OuterBox = styled("div")({
  height: "486px",
  width: "284px",
  border: "1px solid #E1ECFC",
  justifyContent: "space-between",
  borderRadius: "10px",
});

const MiddleBox = styled("div")({
  display: "flex",
  gap: 3,
  marginLeft: "10px",
  marginTop: "16px",
  marginBottom: "10px",
});

const LowerBox = styled("div")({
  width: "100%",
  marginTop: "5px",
  bottom: 0,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  borderRadius: "10px",
});

const AlignBox = styled("div")({
  marginLeft: "16px",
  marginTop: "15px",
});

const LeftBox = styled("div")({
  marginRight: 0,
});

const FlexBoxCenter = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const ReadingOuterBox = styled("div")({
  marginTop: "0px",
});

const ReadingInnerBox = styled("div")({
  display: "flex",
});

const CardMiddleBox = styled("div")({
  backgroundColor: "#FFFFFF",
});

export const InfoCardComponent = (props: InfocardProps) => {
  const navigate = useNavigate();
  const showBookDetail = () => {
    navigate("/bookdetails", {
      state: { text: props.title, imageSrc: props.source },
    });
  };

  const elem = () => {
    switch (props.readStatus) {
      case "addToLibrary":
        return (
          <CardBox1>
            <SimpleButtonComponent
              buttonType={"libraryWithBorder"}
              children={"Add to library"}
              icon={<AddIcon />}
            ></SimpleButtonComponent>
          </CardBox1>
        );

      case "addToLibraryColor":
        return (
          <CardBox2>
            <SimpleButtonComponent
              buttonType={"buttonForAddCard"}
              children={"Add to library"}
              icon={<AddIcon />}
            ></SimpleButtonComponent>
          </CardBox2>
        );

      case "readAgain":
        return (
          <CardBox3>
            <FlexBoxCenter>
              <Typography sx={{ color: "#0365F2", fontWeight: 600 }}>
                Read again
              </Typography>
            </FlexBoxCenter>
            <CardBox4 />
          </CardBox3>
        );

      case "finished":
        return (
          <CardBox3>
            <FlexBoxCenter>
              <Typography sx={{ color: "#0365F2", fontWeight: 600 }}>
                Finished
              </Typography>
            </FlexBoxCenter>
            <ReadingInnerBox>
              <CardBox5 />
              <CardBox6 />
            </ReadingInnerBox>
          </CardBox3>
        );

      case "reading":
        return (
          <ReadingOuterBox>
            <CardBox7>
              <More width={"25px"} height={"25px"}></More>
            </CardBox7>
            <ReadingInnerBox>
              <CardBox5 />
              <CardBox6 />
            </ReadingInnerBox>
          </ReadingOuterBox>
        );
    }
  };

  return (
    <OuterBox>
      <ImageComponent source={props.source}></ImageComponent>
      <CardMiddleBox onClick={showBookDetail}>
        <AlignBox>
          <Typography
            variant="subtitle1"
            sx={{ color: "#03314B", fontWeight: 700, fontSize: "18px" }}
          >
            {props.title}
          </Typography>
        </AlignBox>
        <AlignBox>
          <Typography
            variant="body1"
            sx={{ color: "#6D787E", fontSize: 16, fontWeight: 500 }}
          >
            {props.writer}
          </Typography>
        </AlignBox>
        <MiddleBox>
          <LeftBox>
            <SimpleButtonComponent
              icon={<TimeIcon />}
              buttonType={"buttonForCard"}
              children={props.readTime + "-minutes read"}
            ></SimpleButtonComponent>
          </LeftBox>
          <LeftBox>
            <SimpleButtonComponent
              icon={<User />}
              buttonType={"buttonForCard"}
              children={props.readCount + "k reads"}
            ></SimpleButtonComponent>
          </LeftBox>
        </MiddleBox>
      </CardMiddleBox>
      <LowerBox>
        <>{elem()}</>
      </LowerBox>
    </OuterBox>
  );
};
