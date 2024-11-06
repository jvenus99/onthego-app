import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CreditsCard from "@/components/credits/credits-card";
import ButtonComponent from "@/components/shared/button";

interface Props {
  running: number;
  reserved: number;
  available: number;
}

export default function CreditsSection(props: Props) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section>
      <Box
        sx={{
          pt: "12px",
          mx: { xs: 8, sm: 8, md: "10%" },
          px: { xs: 10, sm: 10, xl: "10%" },
          pb: 10,
          height: "auto",
          backgroundColor: "secondary.main",
          border: "1px solid",
          width: { xl: "100%" },
          borderColor: "divider",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            textTransform: "uppercase",
          }}
        >
          Créditos para painel
        </Typography>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <CreditsCard
            title="Créditos disponíveis"
            number={props.available}
            color="#0AD2A5"
            sx={{ flex: { xl: 1 }, width: "100%" }}
          />
          <CreditsCard
            title="Créditos em campo"
            number={props.running}
            color="#C7B2FF"
            sx={{ flex: 1, width: "100%" }}
          />
          <CreditsCard
            title="Créditos reservadps"
            number={props.reserved}
            shadow
            color="#000000"
            sx={{ flex: 1, width: "100%" }}
          />
        </Box>
        <ButtonComponent
          variant={isMdUp ? "outlined" : "contained"}
          backgroundColor="secondary.main"
          text="Gerenciar créditos"
          sx={{ width: "100%", mt: 10 }}
        />
      </Box>
    </section>
  );
}
