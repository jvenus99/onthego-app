"use client";
import AudienceSection from "@/components/audience/audience-section";
import CreditsSection from "@/components/credits/credits-section";
import MyResearches from "@/components/researches/my-researches";
import ResumeSection from "@/components/resume/resume-section";
import ShotsSection from "@/components/shots/shots-section";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      <ResumeSection />
      <MyResearches />
      <Box
        sx={{
          mx: { md: "5%" },
          height: "auto",
          display: { md: "flex" },
        }}
      >
        <CreditsSection />
        <Box
          sx={{
            display: { md: "flex" },
            flexDirection: { md: "column" },
            flex: 1,
            mt: { xs: 8, sm: 8, md: 0 },
          }}
        >
          <AudienceSection />
          <ShotsSection />
        </Box>
      </Box>
    </main>
  );
}
