import { Grid, Typography } from "@mui/material";
import React from "react";
import { InfoCardComponent } from "../../Organisms/BookCard/Infocard";
import { styled } from "@mui/system";

type cardProps = {
  id: number;
  title: string;
  author: string;
  timeToRead: number;
  numberOfReads: number;
  image: string;
  status: {
    isTrending: boolean;
    isFinished: boolean;
    isFeatured: boolean;
    justAdded: boolean;
  };
};

type CardGridProps = {
  cardList?: Array<cardProps>;
  title?: React.ReactNode;
};

const InnerBox = styled("div")({
  width: "912px",
  marginTop: "80px",
});

export const EntrepreneurshipInnerComponent = (props: CardGridProps) => {
  return (
    <InnerBox>
      <Typography
        variant="h3"
        sx={{ fontSize: "24px", fontWeight: "700", color: "#03314B" }}
      >
        {props.title}
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "25px" }}>
        {props.cardList?.map((item) => {
          return (
            <Grid item xs={4} key={item.id}>
              <InfoCardComponent
                source={item.image}
                title={item.title}
                writer={item.author}
                readCount={item.numberOfReads}
                readTime={item.timeToRead}
                readStatus={"addToLibrary"}
              ></InfoCardComponent>
            </Grid>
          );
        })}
      </Grid>
    </InnerBox>
  );
};
