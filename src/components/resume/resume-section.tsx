"use client ";
import { Box, Typography, useTheme } from "@mui/material";
import ResumeCard from "@/components/resume/resume-card";
import ProgessCircle from "@/components/shared/progress-circle";
import ProgressBar from "@/components/shared/progress-bar";
import Image from "next/image";
import ButtonComponent from "@/components/shared/button";
import { Add } from "@mui/icons-material";

interface CardProps {
  running: { current: number; total: number };
  audience: { balance: number; sended: number };
  scripting: number;
}

const cards = [
  {
    activeNumbers: 0,
    totalNumbers: 5,
    subTitle: "Pesquisas em campo",
    footerComponent: <ProgessCircle activeNumbers={0} totalNumbers={5} />,
    active: true,
  },
  {
    activeNumbers: 300,
    subTitle: "Pesquisas em roteirização",
  },
  {
    activeNumbers: 2000,
    totalNumbers: 10000,
    subTitle: "Disparos feitos",
    footerComponent: <ProgressBar activeNumbers={2000} totalNumbers={10000} />,
  },
];

export default function ResumeSection(props: CardProps) {
  const theme = useTheme();
  return (
    <section>
      <Box
        sx={{
          pt: { xs: "15%", sm: "15%", md: "10%" },
          pb: { xs: "10%", sm: "10%", md: "5%" },
          px: { xs: 8, sm: 8, md: "10%" },
          background: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          display: { xs: "block", sm: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
            Resumo Mensal
          </Typography>
          <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
            <b>JANEIRO, 2023</b>
          </Typography>
          <Box
            sx={{
              mt: 6,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <Box
              sx={{
                flex: 1,
              }}
            >
              <ResumeCard
                activeNumbers={props.running.current}
                totalNumbers={props.running.total}
                subTitle={"Pesquisas em campo"}
                footerComponent={
                  <ProgessCircle
                    activeNumbers={props.running.current}
                    totalNumbers={props.running.total}
                  />
                }
                active={true}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
              }}
            >
              <ResumeCard
                activeNumbers={props.scripting}
                subTitle={"Pesquisas em roteirização"}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
              }}
            >
              <ResumeCard
                activeNumbers={props.audience.sended}
                totalNumbers={props.audience.balance}
                subTitle={"Disparos feitos"}
                footerComponent={
                  <ProgressBar
                    activeNumbers={props.audience.sended}
                    totalNumbers={props.audience.balance}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 6,
            flexDirection: "column",
            background: "#C7B2FF",
            width: { xs: "100%", sm: "100%", md: "30%" },
            mt: 10,
            pb: 12,
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image
            src="/rectangle.svg"
            alt="Rectangle On the go"
            width={100}
            height={100}
          />
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            <b>Pronto para conhecer seu cliente?</b>
          </Typography>
          <ButtonComponent
            text="Nova Pesquisa"
            sx={{ width: "80%", mt: 4 }}
            icon={<Add />}
          />
        </Box>
      </Box>
    </section>
  );
}
