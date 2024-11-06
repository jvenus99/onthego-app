import { Box, useTheme, Typography, Divider, Button } from "@mui/material";
import { ArrowForward, Email } from "@mui/icons-material";
import ButtonComponent from "../shared/button";
export default function ShotsSection() {
  const theme = useTheme();
  return (
    <section>
      <Box
        sx={{
          mt: "5%",
          pt: "12px",
          mx: { xs: 8, sm: 8, md: "10%" },
          px: 10,
          pb: 10,
          height: "auto",
          backgroundColor: theme.palette.secondary.main,
          display: { xs: "block", sm: "block", md: "flex" },
          border: "1px solid",
          borderColor: theme.palette.divider,
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
          <Email width={12} height={12} /> <span>Disparos</span>
        </Typography>
        <Divider
          sx={{
            color: (theme) => theme.palette.divider,
            borderWidth: "1px",
            mt: 4,
          }}
        />

        <Box>
          <Typography variant="h3" sx={{ mt: 10 }}>
            <b>2000</b>
            <Typography
              variant="caption"
              sx={{ fontSize: "18px", color: theme.palette.secondary.light }}
            >
              /10000
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            <b>Disparos feitos</b>
          </Typography>
        </Box>
        <ButtonComponent
          text="Ir para campanhas"
          sx={{ width: "100%", mt: 4 }}
        />
      </Box>
    </section>
  );
}
