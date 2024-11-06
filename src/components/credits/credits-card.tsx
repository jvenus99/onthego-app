"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps, Theme, useTheme } from "@mui/material";

interface Props {
  number: number;
  title: string;
  color: string;
  shadow?: boolean;
  sx?: SxProps<Theme>;
}

export default function CreditsCard(props: Props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        background: theme.palette.secondary.main,
        width: "230px",
        minHeight: "138px",
        borderColor: props.color + "!important",
        border: "2px solid",
        borderBottom: "18px solid",
        opacity: props.shadow ? 0.5 : 1, // Aplica opacidade condicionalmente
        ...props.sx,
      }}
    >
      <CardContent sx={{ p: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              mb: 6,
              textAlign: "center",
            }}
          >
            <b>{props.number}</b>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              width: "50%",
            }}
          >
            <b>{props.title}</b>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
