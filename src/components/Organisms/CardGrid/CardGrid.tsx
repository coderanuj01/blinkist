import { Box, Grid } from "@mui/material";
import { InfoCardComponent } from "../../molecules/InfoCards/Infocard";

type cardProps = {
  id: number;
  title: string;
  author: string;
  timeToRead: number;
  numberOfReads: number;
  image?: string;
  status: {
    isTrending: boolean;
    isFinished: boolean;
    isFeatured: boolean;
    justAdded: boolean;
  };
};

type CardGridProps = {
  cardList?: Array<cardProps>;
};

export const CardGridComponent = (props: CardGridProps) => {
  return (
    <Box sx={{ width: "912px", marginLeft: "264px" }}>
      <Grid container spacing={2}>
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
    </Box>
  );
};
