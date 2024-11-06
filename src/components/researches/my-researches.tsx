import { Box, Typography } from "@mui/material";
import Carousel from "@/components/researches/carousel";
import { use, useEffect } from "react";

interface Item {
  name: string;
  id: number;
  status: string;
}

interface Props {
  items: Item[];
}

// const items = [
//   { title: "Card 1", status: "active" },
//   { title: "Card 2", status: "draft" },
//   { title: "Card 3", status: "active" },
//   { title: "Card 4", status: "active" },
//   { title: "Ver todas", status: "none" },
// ];

export default function MyResearches(props: Props) {
  return (
    <section>
      <Box
        sx={{
          pt: "52px",
          pb: { xs: "10%", sm: "10%", md: "5%" },
          px: { xs: 8, sm: 8, md: "10%" },
          display: { xs: "block", sm: "block", md: "flex" },
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ mb: 10 }}>
          <b>Minhas Pesquisas</b>
        </Typography>
        <Carousel items={props.items} />
      </Box>
    </section>
  );
}
