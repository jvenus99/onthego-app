"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { CircleRounded } from "@mui/icons-material";

interface Props {
  active?: boolean;
  activeNumbers: number;
  totalNumbers?: number;
  subTitle: string;
  footerComponent?: React.ReactNode;
}

export default function BasicCard(props: Props) {
  const theme = useTheme();
  const phrase = props.subTitle;
  const words = phrase.split(" ");
  const firstWord = words.shift();
  const remainingWords = words.join(" ");
  return (
    <Card
      sx={{
        background: theme.palette.primary.light,
        width: { xs: "100%", sm: "100%", md: "229px" },
        height: { xs: "171px", sm: "171px", md: "200px" },
      }}
    >
      {props.active && (
        <CircleRounded
          sx={{ float: "right", width: "14px", pr: 2, color: "#0AD2A5" }}
        />
      )}
      <CardContent sx={{ px: 10, pb: 15 }}>
        <Typography
          variant="h4"
          sx={{ color: theme.palette.secondary.main, mb: 6 }}
        >
          <b>{props.activeNumbers}</b>
          {props.totalNumbers && (
            <Typography
              variant="caption"
              sx={{ fontSize: "18px", color: theme.palette.secondary.light }}
            >
              /{props.totalNumbers}
            </Typography>
          )}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "18px",
            color: theme.palette.secondary.light,
            textTransform: "uppercase",
            lineHeight: "1",
          }}
        >
          {firstWord}
          <br />
          {remainingWords}
        </Typography>
        {props.footerComponent && (
          <Box sx={{ mt: 12 }}>{props.footerComponent}</Box>
        )}
      </CardContent>
    </Card>
  );
}
