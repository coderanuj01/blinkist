import { Box, styled, Typography } from "@mui/material";
import { ImageComponent } from "../../atoms/Image/Image";
import blink from "../../../Images/blink.png";
import { NavFooterData as data } from "../../../data/NavFooterData";

type FooterProps = {};

let Items = styled("div")({
  marginTop: 16,
});

export const FooterComponent = (props: FooterProps) => {
  return (
    <Box sx={{ height: "370px", width: "100vw", backgroundColor: "#F1F6F4" }}>
      <Box
        sx={{
          marginLeft: "244px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "34px" }}>
          <Box sx={{ width: "378px" }}>
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
          </Box>
          <Box sx={{ width: "214px" }}>
            <Typography
              sx={{
                fontFamily: "Cera Pro",
                fontWeight: 700,
                fontSize: 16,
                color: "#03314B",
              }}
            >
              {data.Editorial.title}
            </Typography>
            {data.Editorial.data.map((text, key) => (
              <Items key={key}>
                <Typography
                  sx={{
                    color: "#6D787E",
                    fontFamily: "Cera Pro",
                    fontWeight: 400,
                  }}
                >
                  {text}
                </Typography>
              </Items>
            ))}
          </Box>
          <Box sx={{ width: "214px" }}>
            <Typography
              sx={{
                fontFamily: "Cera Pro",
                fontWeight: 700,
                fontSize: 16,
                color: "#03314B",
              }}
            >
              {data.UsefulLinks.title}
            </Typography>
            {data.UsefulLinks.data.map((text, key) => (
              <Items key={key}>
                <Typography
                  sx={{
                    color: "#6D787E",
                    fontFamily: "Cera Pro",
                    fontWeight: 400,
                  }}
                >
                  {text}
                </Typography>
              </Items>
            ))}
          </Box>
          <Box sx={{ width: "214px" }}>
            <Typography
              sx={{
                fontFamily: "Cera Pro",
                fontWeight: 700,
                fontSize: 16,
                color: "#03314B",
              }}
            >
              {data.Company.title}
            </Typography>
            {data.Company.data.map((text, key) => (
              <Items key={key}>
                <Typography
                  sx={{
                    color: "#6D787E",
                    fontFamily: "Cera Pro",
                    fontWeight: 400,
                  }}
                >
                  {text}
                </Typography>
              </Items>
            ))}
          </Box>
        </Box>
        <Box sx={{ marginTop: "60px" }}>
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
        </Box>
      </Box>
    </Box>
  );
};
