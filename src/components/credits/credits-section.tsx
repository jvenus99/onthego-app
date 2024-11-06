import { Box, useTheme, Typography } from "@mui/material";
import CreditsCard from "@/components/credits/credits-card";
import ButtonComponent from "@/components/shared/button";
export default function CreditsSection() {
  const theme = useTheme();
  return (
    <section>
      <Box
        sx={{
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
            number={1500}
            color="#0AD2A5"
            sx={{ width: "100%" }}
          />
          <CreditsCard
            title="Créditos em campo"
            number={300}
            color="#C7B2FF"
            sx={{ flex: 1, width: "50%" }}
          />
          <CreditsCard
            title="Créditos reservadps"
            number={600}
            shadow
            color="#000000"
            sx={{ flex: 1, width: "50%" }}
          />
        </Box>
        <ButtonComponent
          text="Gerenciar créditos"
          sx={{ width: "100%", mt: 10 }}
        />
      </Box>
    </section>
  );
}
