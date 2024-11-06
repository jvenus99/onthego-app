import { Box, Typography, Button } from "@mui/material";
import { ArrowForward, CircleRounded, Comment } from "@mui/icons-material";

interface Props {
  item: {
    comments: number;
    read: boolean;
    mensage: string;
    id: string;
    createAt: string;
  };
}

export default function CommentsCard(props: Props) {
  return (
    <section>
      <Box
        sx={{
          height: "auto",
          display: { xs: "block", sm: "block", md: "flex" },
          border: { xs: "none", sm: "none", md: "1px solid" },
          px: 10,
          pt: 6,
          pb: 12,
          borderRadius: "4px",
          borderColor: "divider",
          flexDirection: "column",
        }}
      >
        <CircleRounded
          sx={{
            width: "14px",
            pr: 2,
            color: "secondary.contrastText",
            position: "relative",
            left: "100%",
          }}
        />
        <Typography
          variant="caption"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Comment sx={{ width: "18px" }} />{" "}
          <span>{props.item.comments} Novos comentários</span>
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            mt: 6,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "298px",
              color: "secondary.light",
              "& b": { color: "black !important" },
            }}
            dangerouslySetInnerHTML={{ __html: props.item.mensage }}
          />
          <Button variant="outlined" sx={{ height: "38px" }}>
            <ArrowForward />
          </Button>
        </Box>
      </Box>
    </section>
  );
}
