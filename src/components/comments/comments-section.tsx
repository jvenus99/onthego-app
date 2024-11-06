import { Box, Typography, Tabs, Tab, useTheme } from "@mui/material";
import CommentsCard from "./comments-card";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Notification{
  comments: number;
  read: boolean;
  mensage: string;
  id: string;
  createAt: string;
}

interface Props {
  items: Notification[]
}

export default function CommentsSection(props: Props) {
  const theme = useTheme();
  return (
    <section>
      <Box
        sx={{
          pt: "64px",
          pb: 10,
          width: { xl: "100%" },
          height: "auto",
          backgroundColor: "secondary.main",
          display: { xs: "block", sm: "block", md: "flex" },
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 4,
            mb: 12,
            px: 12,
          }}
        >
          Atualizações{" "}
          <Typography
            variant="caption"
            sx={{
              background: "secondary.contrastText",
              borderRadius: "14px",
              color: "secondary.main",
              padding: "2px 12px",
            }}
          >
            {props.items.length}
          </Typography>
        </Typography>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Tabs
            value={0}
            aria-label="Comments Tabs"
            TabIndicatorProps={{
              style: { backgroundColor: theme.palette.secondary.contrastText },
            }}
          >
            <Tab
              label="Todas"
              {...a11yProps(0)}
              sx={{
                "&.Mui-selected": {
                  color: "secondary.contrastText",
                },
              }}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            px: 12,
            mt: 6,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "secondary.light",
            }}
          >
            Hoje
          </Typography>
          {props.items.map((item, index) => (
            <CommentsCard key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </section>
  );
}
