import { Box, Typography, Divider, Button } from "@mui/material";
import { ArrowForward, FolderShared } from "@mui/icons-material";

interface Props {
  contacts: number;
}

export default function AudienceSection(props: Props) {
  return (
    <section>
      <Box
        sx={{
          pt: "12px",
          mx: { xs: 8, sm: 8, xl: "10%" },
          px: 10,
          pb: 10,
          height: "auto",
          backgroundColor: "secondary.main",
          display: { xs: "block", sm: "block", md: "flex" },
          border: "1px solid",
          borderColor: "divider",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <FolderShared width={12} height={12} /> <span>Audiência</span>
        </Typography>
        <Divider
          sx={{
            color: "divider",
            borderWidth: "1px",
            mt: 4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ mt: 10 }}>
              <b>{props.contacts}</b>
            </Typography>
            <Typography variant="subtitle1">
              <b>Contatos</b>
            </Typography>
          </Box>
          <Button variant="outlined" sx={{ height: "48px" }}>
            <ArrowForward />
          </Button>
        </Box>
      </Box>
    </section>
  );
}
