"use client";
import AudienceSection from "@/components/audience/audience-section";
import CommentsSection from "@/components/comments/comments-section";
import CreditsSection from "@/components/credits/credits-section";
import MyResearches from "@/components/researches/my-researches";
import ResumeSection from "@/components/resume/resume-section";
import ShotsSection from "@/components/shots/shots-section";
import { getHomeData, HomeData } from "@/services/home";
import { getNotifications, Notification } from "@/services/notifications";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<HomeData>();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await getHomeData();
        const notifications = await getNotifications();
        setData(homeData);
        setNotifications(notifications);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <main>
      <Box sx={{ display: { lg: "flex" } }}>
        <Box sx={{ width: "100%" }}>
          <ResumeSection
            audience={data.audience}
            running={data.researches.running}
            scripting={data.researches.scripting}
          />
          <Box sx={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <MyResearches items={data.researches.myresearches} />
              <Box
                sx={{
                  ml: { md: "32px" },
                  height: "auto",
                  width: { xl: "80%" },
                  display: { md: "flex" },
                  gap: {xl: 14},
                }}
              >
                <CreditsSection
                  running={data.credits.running}
                  available={data.credits.available}
                  reserved={data.credits.reserved}
                />
                <Box
                  sx={{
                    display: { md: "flex" },
                    flexDirection: { md: "column" },
                    flex: 1,
                    mt: { xs: 8, sm: 8, md: 0 },
                  }}
                >
                  <AudienceSection contacts={data.audience.contacts} />
                  <ShotsSection sended={data.audience.sended} balance={data.audience.balance} />
                </Box>
              </Box>
            </div>
            <Box
              sx={{
                width: "40%",
                height: "100vh",
                backgroundColor: "secondary.main",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "none",
                },
              }}
            >
              <CommentsSection items={notifications} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "4%",
            width: "30%",
            height: "100vh",
            backgroundColor: "secondary.main",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
            },
          }}
        >
          <CommentsSection items={notifications} />
        </Box>
      </Box>
    </main>
  );
}
