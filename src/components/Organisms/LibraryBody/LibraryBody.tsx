import { Typography } from "@mui/material";
import { CardGridComponent } from "../CardGrid/CardGrid";
import BooksDetails from "../../../data/BooksDetails";
import { UnderlineButtonComponent } from "../../molecules/UnderlinedButton/UnderlineButton";
import { useState } from "react";
import { styled } from "@mui/material";

const OuterLibraryBody = styled("div")({
  marginTop: "145px",
});

const PreOuterLibrary = styled("div")({
  marginLeft: "264px",
  marginTop: "59px",
});

const OuterMiddleLibrary = styled("div")({
  marginTop: "60px",
});

const PreOuterMiddleLibrary = styled("div")({
  display: "flex",
  marginLeft: "264px",
});

const MiddleLibraryBox = styled("div")({
  marginBottom: "111px",
  marginTop: "25px",
});

const PointerBox = styled("div")({
  cursor: "pointer",
});

export const LibraryBodyComponent = () => {
  const [readStatus, setReadStatus] = useState(1);

  const switchReading1 = () => {
    setReadStatus(2);
  };

  const switchReading2 = () => {
    setReadStatus(1);
  };

  let currentReadingList = BooksDetails.filter(
    (item) => !item.status.isFinished
  );

  let finishedList = BooksDetails.filter((item) => item.status.isFinished);

  return (
    <OuterLibraryBody>
      <PreOuterLibrary>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Cera Pro",
            fontWeight: 700,
            fontSize: "36px",
          }}
        >
          My Library
        </Typography>
      </PreOuterLibrary>
      <OuterMiddleLibrary>
        <PreOuterMiddleLibrary>
          <PointerBox onClick={switchReading2}>
            <UnderlineButtonComponent
              children={"Currently reading"}
              style={
                readStatus === 1
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
          </PointerBox>
          <PointerBox onClick={switchReading1}>
            <UnderlineButtonComponent
              children={"Finished"}
              style={
                readStatus === 2
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
          </PointerBox>
          <UnderlineButtonComponent
            style={{
              borderBottom: "2px solid #E1ECFC",
              width: 300,
              paddingBottom: 1,
            }}
          ></UnderlineButtonComponent>
        </PreOuterMiddleLibrary>
      </OuterMiddleLibrary>
      <MiddleLibraryBox>
        {readStatus === 1 ? (
          <CardGridComponent
            cardList={currentReadingList}
            cardsType={"finished"}
          ></CardGridComponent>
        ) : (
          <CardGridComponent
            cardList={finishedList}
            cardsType={"readAgain"}
          ></CardGridComponent>
        )}
      </MiddleLibraryBox>
    </OuterLibraryBody>
  );
};
